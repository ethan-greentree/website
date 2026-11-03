# Docker builds and deployments

The Dockerfile builds Astro with Node.js 24 and pnpm 12.4.1, then copies `dist/`
into Nginx. Only the Nginx stage is shipped. Dependencies are installed using the
pnpm lockfile; changes to site content can reuse the dependency layer.

## Run locally

```sh
docker compose up --build -d
```

Open http://localhost:8080. Re-run the command to rebuild after changes.
Use `docker compose down` to stop the local site. This root Compose file is for
local development; production uses a Compose file installed on the VPS.

Nginx serves generated pages directly and returns Astro's custom page with HTTP
404 for missing paths. HTML uses `Cache-Control: no-cache`; hashed `/_astro/`
assets use one-year immutable caching.

Every response also carries the security headers in
`docker/security-headers.conf`. Each `location` block includes that file,
because Nginx drops server-level `add_header` lines in a location that sets
its own. Script and style rules come from the CSP `<meta>` tag Astro writes
into each page (`security.csp` in `astro.config.mjs`), using hashes rather
than `'unsafe-inline'`. Astro's Shiki highlighting is off because it relies on
inline styles the CSP blocks. The runtime stage runs `apk upgrade` to pick up
Alpine security fixes released after the base image.

## Stage 1: build and publish

`.github/workflows/build-image.yaml` runs when changes reach `main`, including
direct pushes. It builds a Linux AMD64 image and publishes it to:

```text
docker.io/<namespace>/<repository>:latest
```

If the Docker build fails, publication stops. The workflow checks out the
source, builds the image locally (refreshing the base images), and scans it
with Trivy. All findings are uploaded to the repository's **Security** tab
under code scanning. A **critical** finding with a fix available stops the
workflow before it signs in to Docker Hub, so nothing is published or
deployed. Lower severities, and critical findings with no fix yet, are
reported without blocking. The image is then pushed from the same build cache.
After publication succeeds, the deployment workflow updates the VPS.

Create a **public** Docker Hub repository before the first publish. Configure the
repository secrets listed below. Confirm an unauthenticated pull
works before deploying; the VPS will not need registry credentials. GitHub
Actions still runs the workflows; Docker Hub stores the published image.

Actions are pinned to full commit SHAs, with the release tag in a comment.
Dependabot (`.github/dependabot.yml`) opens grouped weekly PRs for npm
packages, actions and Docker base images; they are merged by hand, since a
merge to `main` deploys. Node tracks its 24 release line and
Nginx tracks `stable-alpine`. Each successful build replaces the `latest` tag.
Older builds are cancelled when main changes. No commit-specific release tags
are published.

## Stage 2: pull and replace

`.github/workflows/deploy.yaml` runs after **Build and publish website image**
finishes successfully on `main`. Failed or cancelled builds do not deploy.

The workflow connects by SSH and runs these commands directly on the VPS:

```sh
cd /opt/ethan-website
docker compose pull
docker compose up -d
```

The server's Compose file supplies the image repository and proxy network. A pull
failure stops before replacement. A successful start completes the deployment;
there are no health checks or automatic rollback. If a release needs reverting,
revert its source changes and publish again.

This is a single-container replacement and may briefly interrupt requests.
Nginx Proxy Manager continues handling HTTPS outside this container.

Older untagged images can remain on the VPS after `latest` moves.
There is no automatic pruning; purge older website images manually if disk
usage becomes a problem. Avoid
host-wide cleanup that could affect the proxy or other services.

## One-time server setup

The first version targets a Linux AMD64 VPS with Docker Engine and the Compose
plugin. Give the SSH account permission to use Docker without an interactive
sudo prompt, and install its SSH public key. With a rootful Docker daemon,
Docker access grants root-level control of the VPS; this approach trusts the
deployment account and its SSH key accordingly.

Use the existing website Compose file in `/opt/ethan-website` on the VPS.
The version-controlled production configuration is `docker-compose.yaml`.
Install it there as `compose.yaml`. It pulls and starts `atomeus/portfolio-website:latest`;
set the GitHub repository secret `DOCKERHUB_IMAGE` to `atomeus/portfolio-website` so the
build workflow publishes the same image. No `.env` file is needed.

The production service can use this configuration:

```yaml
services:
  website:
    container_name: website
    image: atomeus/portfolio-website:latest
    restart: unless-stopped

networks:
  default:
    external: true
    name: nginxproxyman
```

Replace the image with the same namespace/repository as `DOCKERHUB_IMAGE` and
the network with the existing Nginx Proxy Manager network (`nginxproxyman`). No deployment script
or configuration upload is needed for subsequent releases.

Production Compose joins the proxy network under container name `website`.
Configure Nginx Proxy Manager to forward HTTP to `website:80` on that network.
Nginx in the image listens on port 80, so a `3000:3000` mapping is not suitable
for this image. No host port needs publishing when the proxy shares the network.
Verify public
HTTPS separately after cutover.

## Link checks

`.github/workflows/check-links.yaml` builds the site and runs lychee over
`dist/` on pull requests, every Monday, and on manual dispatch. It reports
broken internal and external links without affecting deploys. LinkedIn is
excluded because it rejects automated requests.

## HTTPS settings in Nginx Proxy Manager

TLS ends at Nginx Proxy Manager, so HSTS and the TLS protocol settings are
configured there, not in this repository. On the `ethangreentree.com` proxy
host's **SSL** tab, turn on **Force SSL** and **HTTP/2 Support**, and leave
**HSTS Enabled** off: its fixed duration is long, and the rollout below starts
short.

1. On the proxy host's **Advanced** tab, add:

   ```nginx
   add_header Strict-Transport-Security "max-age=86400" always;
   ```

2. Confirm it is live with `curl -sI https://ethangreentree.com`, and that
   the headers from `docker/security-headers.conf` also appear.
3. After a day or more with HTTPS working normally, change `86400` to
   `31536000` (one year).

Do not add `preload`: it is hard to undo. Then run the site through
[Mozilla Observatory](https://developer.mozilla.org/en-US/observatory) and
[SSL Labs](https://www.ssllabs.com/ssltest/) and record the dated grades on
the website project page.

## GitHub settings

Set these at the **repository** level for the build workflow:

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `DOCKERHUB_IMAGE` | Docker Hub namespace/repository, such as `atomeus/portfolio-website` |
| Secret | `DOCKERHUB_USERNAME` | Docker Hub account allowed to push to that repository |
| Secret | `DOCKERHUB_TOKEN` | Docker Hub personal access token with Read & Write access |

Use an access token rather than your account password. Do not grant Delete
access for publishing. The token is used by the registry login action and is
not passed into the Docker build or installed on the VPS.

Set these deployment secrets at the repository level too. The deploy job uses
the `production` environment, which can be restricted to `main`; repository
secrets remain available to that job.

Leave required reviewers disabled if deployments should run without approval.

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `DEPLOY_HOST` | VPS hostname or IPv4 address |
| Secret | `DEPLOY_USER` | Dedicated SSH account |
| Secret | `DEPLOY_PORT` | Optional SSH port, defaults to `22` when absent |
| Secret | `DEPLOY_SSH_KEY` | Private key for that account |
| Secret | `DEPLOY_KNOWN_HOSTS` | Verified host-key entries for the VPS |

Obtain and verify the SSH host key through a trusted channel. Nonstandard ports
use `[hostname]:port` entries. The workflow checks the server identity strictly
and does not run `ssh-keyscan` during deployment.

Server installation, secrets, and the first deployment are still required before
cutover. The deployment workflow must be on the default branch to receive build
completion events. Track that work in
[issue #3](https://github.com/ethan-greentree/website/issues/3).

## Official documentation

- [Multi-stage Docker builds](https://docs.docker.com/build/building/multi-stage/)
- [Image-building best practices](https://docs.docker.com/build/building/best-practices/)
- [pnpm in Docker](https://pnpm.io/docker)
- [Publishing Docker images with GitHub Actions](https://docs.github.com/en/actions/tutorials/publish-packages/publish-docker-images)
- [Docker Hub login action](https://github.com/docker/login-action#docker-hub)
- [Docker Hub personal access tokens](https://docs.docker.com/security/access-tokens/)
- [Create a public Docker Hub repository](https://docs.docker.com/docker-hub/repos/create/)
- [GitHub deployment environments and concurrency](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments)
- [Compose replacement and waiting for health](https://docs.docker.com/reference/cli/docker/compose/up/)
- [Docker daemon access and security](https://docs.docker.com/engine/security/)
- [Trivy action](https://github.com/aquasecurity/trivy-action)
- [Dependabot options](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference)
- [Astro content security policy](https://docs.astro.build/en/reference/configuration-reference/#securitycsp)
- [Trigger a workflow after another completes](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run)
