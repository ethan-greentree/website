# Personal site: design and publishing research

Research date: **2026-10-10**. Prepared for Ethan to review later. This is a proposal, not an approved implementation specification. No application code, deployment configuration, server settings, or GitHub settings were changed.

Retained for publishing and deployment research. The visual proposals below are superseded by [DESIGN.md](../DESIGN.md), including its decision to use ordinary section headings rather than sticky labels.

## Recommended direction

Build a static Astro portfolio with an earthy, chunky visual identity and a quieter article layout. Author Markdown in a dedicated Obsidian publishing vault or folder. Start with standard Markdown links and an optional Astro Composer authoring plugin; evaluate build-time wikilinks against a small fixture before committing to that extra dependency. Build on GitHub Actions after pushes to `main`, then deploy finished files over SSH to the existing Vultr VPS.

This preserves the goals already agreed: affordable operation, easy writing, GitHub Actions practice, and a site that helps employers and collaborators understand Ethan's skills. The existing 1 vCPU / 1 GB VPS only needs to serve the generated site. No persistent Node application or Dokploy installation is needed for this architecture.

## Evidence and limits

I read the repository instructions, design wishlist, package manifest and lockfile, Astro configuration, shared layout, homepage, and global styles. Local versions report Node **25.4.0** and pnpm **12.4.1**; the lockfile resolves Astro **7.3.8**. These are observations of this checkout, not recommendations to use the newest available versions.

I retrieved the three reference sites' first-party page text. I did **not** capture desktop/mobile screenshots or interact with their scrolling behavior. Their visual qualities below are explicitly Ethan's observations; verified evidence concerns their accessible page content. A later browser session should verify visual behavior before copying interaction patterns. Plugin support described as undocumented or untested should not be treated as absent; it means this research did not establish it.

## Design references translated into a brief

| Reference | Ethan's observation | Verified page content | Useful direction for this site |
| --- | --- | --- | --- |
| [Personlig Arkitektur](https://personligarkitektur.no/) | Likes chunkiness; text layout feels clunky | Repeated practice/project sections combine descriptions and substantial image material | Give sections strong boundaries, but use a simpler text hierarchy and predictable reading column |
| [Josh Puckett](https://joshpuckett.me/) | Feels good, a little too simple | Short introduction followed by Projects and Writing | Keep navigation and content scanning straightforward; add personality through type, color, and structure |
| [Simon Austerberry](https://www.simonausterberry.co.uk/) | Strongest reference; especially sticky section headers | Separate services, work, biography, and contact sections | Explore persistent section labels and a clear introduction → evidence → person → contact sequence |

These references support a useful synthesis: **bold structure, earthy colors, comfortable reading**. That phrase is a design proposal derived from Ethan's feedback, not a factual property of all three sites. Borrow patterns, not their copy, branding, or assets.

### Proposed site outline

Keep the first version small enough that every destination contains useful content:

- **Home:** name and a short positioning statement; two or three selected projects; latest writing; a short explanation of how Ethan works; contact links.
- **Projects:** initially a homepage section. Add an archive and individual case studies when there is enough material. Describe the problem, Ethan's contribution, result, and lessons, with a repository/demo link where appropriate.
- **Blog:** chronological listing with title, description, and publication date; individual article pages. Add tags when the actual archive justifies them.
- **About:** fuller background and interests if the homepage cannot comfortably cover them.
- **Contact:** an email link and relevant professional links can initially live in the footer rather than require an empty page.

This content order is my recommendation, not a settled choice. Existing homepage wording such as “Professional Tinkerer” and the focus on curiosity are good raw material, but project evidence should appear early for the agreed audience. Do not invent accomplishments or case studies to fill the layout.

### Layout and interaction

Use ordinary vertical document flow with grids inside selected sections. The current shared layout places the entire body in a 12 × 12 grid, while homepage paragraphs inherit very large type. That foundation makes content growth unnecessarily awkward. Give body copy a normal scale and let headings, section borders, project previews, and buttons carry the visual weight.

On wider screens, prototype a narrow sticky section-label column alongside the content. On small screens, compare a short sticky bar with a normal heading; stacking several sticky bars would consume valuable space. Preserve semantic headings and reading order independently of the visual grid. Focused links must remain visible under persistent UI; W3C specifically identifies sticky headers as a possible source of obscured keyboard focus. [W3C focus guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

Start article bodies around 60–70 characters per line and approximately 1.6 line height, then tune with a real technical article. These are candidate design settings, not WCAG rules. Keep code and tables scrollable within their own containers. Test narrow screens and zoom: W3C's reflow criterion expects ordinary content to work at a width equivalent to 320 CSS pixels without two-dimensional scrolling, with exceptions for content such as necessary data tables. [W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

Prefer real links, visible focus states, a skip link, and restrained motion. Add animations only where they aid understanding. The existing GSAP dependency does not obligate the design to use animation.

### Palette candidates

The existing stylesheet already defines light, sand, muted green, and dark green tokens. That is a useful starting point; a rebrand does not require throwing everything away. Explore cream backgrounds, forest text/borders, sand panels, and one deliberate accent.

The following are assistant-generated candidates. Ratios were calculated with the standard sRGB relative-luminance method; this is a palette check, not an accessibility audit.

| Pair | Contrast | Candidate use |
| --- | ---: | --- |
| Forest `#243D30` / cream `#F4F0E6` | 10.34:1 | Main text and background |
| Forest / sand `#D5C9BB` | 7.23:1 | Text on panels |
| Forest / chartreuse `#D1E85B` | 8.63:1 | Accent button text |
| Forest / moss `#63764D` | 2.37:1 | Avoid this text pairing |
| Forest / orange `#C4512B` | 2.55:1 | Avoid this text pairing |

WCAG AA requires at least 4.5:1 for normal text and 3:1 for large text. Borders, focus indicators, and other UI need their own checks; passing one text pairing does not establish compliance. [W3C contrast requirements and calculation](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

Chartreuse is the stronger initial accent candidate because it contrasts well with forest. Warm orange is still viable if paired with a different foreground and checked separately. Use green as a personal association with Greentree; a literal tree logo remains optional.

### Typography and cost

Compare two inexpensive directions using the same real content:

1. **Space Grotesk headings + Inter body:** a candidate for chunky, technical character with a restrained reading face. Space Grotesk's distribution includes an SIL Open Font License; Inter is also distributed under that license. Both can be self-hosted without buying a font subscription, subject to their license conditions. [Space Grotesk files/license](https://github.com/google/fonts/tree/main/ofl/spacegrotesk), [Inter project/license](https://github.com/rsms/inter)
2. **Existing Faculty Glyphic headings + system body font:** lower migration effort and no additional body-font download. The stylesheet currently loads Faculty Glyphic through Google Fonts. Assess its fit with technical headings and verify the specific distributed license before bundling it; its license was not audited here.

Avoid selecting a font by its specimen alone. Compare a long project title, navigation, dates, code-adjacent prose, and a full article on mobile. Limit families and weights initially; self-hosting is a recommendation for predictable delivery, not a prerequisite for the design.

## Obsidian authoring: what actually needs solving

The hard part is the boundary between note names and website URLs. A `slug` is only stable if the route generator and every link resolver use it. Setting a frontmatter property alone does not configure either side.

| Approach | Advantages | Costs and limits | Recommendation |
| --- | --- | --- | --- |
| Standard Markdown links | No conversion dependency; predictable output | Site-relative routes may not navigate like local note links inside Obsidian | Baseline for the first complete publishing path |
| Astro Composer | Convenient post creation and property templates; converts internal links before publishing | Modifies source; route rules and complex Obsidian syntax need verification | Try in a small publishing vault before adopting |
| Build-time `remark-wiki-link` | Keeps wikilinks in source; configurable URL mapping | Needs resolver work and Astro 7 Markdown pipeline configuration | Optional experiment if source conversion is uncomfortable |

Astro Composer is MIT-licensed. Its documented features include configurable folders/link prefixes, file or folder posts, property templates including `{{slug}}`, and a conversion command. It is an authoring helper, not a deployment system. Its README's underscore draft convention must not substitute for explicit collection filtering. [Author's repository](https://github.com/davidvkimball/obsidian-astro-composer), [Obsidian plugin listing](https://community.obsidian.md/plugins/astro-composer)

The listing does not establish that conversion honors arbitrary stable frontmatter slugs, preserves heading fragments in every case, or exports all image/note embeds. Those remain acceptance checks. A template can create `slug`; that is different from proving the link converter uses it. Avoid assuming every documented feature in the current listing works identically in an older installed release.

`remark-wiki-link` is MIT-licensed and documents configurable page resolution, URL generation, known permalinks, and an alias separator. Its default alias separator is `:`, whereas the proposed Obsidian syntax uses `|`; configure this explicitly. Its default URL pattern also differs from `/blog/<slug>/`. Missing pages get a class rather than automatically failing the build. [Plugin README and license](https://github.com/landakram/remark-wiki-link)

**Important correction to our earlier discussion:** Astro 7 uses Sätteri as its default Markdown processor. A remark plugin is not a drop-in addition to the untouched project. The official migration guide says to install `@astrojs/markdown-remark` and select its `unified()` processor when retaining that ecosystem. The deprecated top-level remark configuration still requires that package. A native Sätteri alternative may be preferable later, but no equivalent wikilink plugin was verified in this research. [Astro 7 migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/)

Before selecting either converter, use fixtures covering:

- `[[note]]` and `[[note|Readable label]]`, including spaces and duplicate filenames in different folders.
- A title/filename rename while an explicit slug stays unchanged.
- `[[note#Heading]]`, punctuation/duplicate headings, and Unicode.
- Standard Markdown images, `![[image.png]]`, and dimensions/alt text if those are required.
- Note embeds, block references, and callouts: explicitly support, convert, or reject each.
- Links to missing or draft posts: fail or report them clearly rather than publish dead links.

No plugin integration was executed here, and complex syntax support remains unverified. This is why I now recommend proving the smallest Markdown workflow first rather than promising a turnkey wikilink solution.

### Content shape and privacy

Use one content collection, a reusable article layout, and a generated post route. Candidate fields: `title`, `description`, `date`, `slug`, `draft`, optional `updated`, `tags`, and image/alt properties if needed. Validate metadata and duplicate slugs. Astro collections support schema validation and local-file loaders; generated routes remain separate from collection definitions. [Astro collections](https://docs.astro.build/en/guides/content-collections/)

Filter unpublished entries consistently from post routes, homepage lists, blog lists, RSS, sitemap, search indexes, and related-post links. Do not rely on hiding a post from the listing alone. Static parameterized routes can generate HTML during the build; a Node server is unnecessary for that URL pattern. [Astro routing](https://docs.astro.build/en/guides/routing/)

Keep private writing outside this public repository. `draft: true` is an editorial flag, not access control: a committed draft is readable in GitHub even if the build excludes it. Likewise, images copied into `public/` are directly served if included in deployment; draft-only media needs separate handling. Astro distinguishes directly copied public assets from processed source images. [Astro images](https://docs.astro.build/en/guides/images/)

Obsidian itself can be used free; its Sync and Publish products are optional paid services. Neither is required for a Git-backed publishing workflow. [Obsidian pricing](https://obsidian.md/pricing)

## GitHub Actions → Vultr

Recommended flow:

```text
Obsidian Markdown + images → commit/push main
  → Linux runner: install → validate → build
  → SSH upload to a new release directory
  → verify release → switch current release → HTTP check
```

The VPS configuration has not been inspected: its operating system, current web server, document root, SSH access, disk space, TLS setup, and backup arrangements are unknown. Deployment commands should be written only after checking those facts.

### Runtime and package-manager compatibility

The checkout permits Node `>=22.12.0` but does not pin pnpm. Installed pnpm is 12.4.1. Its current documentation says pnpm 12 is native, while npm-based installation requires Node 22.13 or newer. Thus the project's declared Node floor is insufficient for that installation route. Pick a supported Node 24 release for CI and pin an exact tested pnpm version in `packageManager`; verify on Linux with the existing lockfile. [pnpm installation requirements](https://pnpm.io/installation/)

Current action READMEs show `actions/checkout@v7`, `actions/setup-node@v7`, and `pnpm/action-setup@v6`. These versions were checked, not taken from earlier conversation examples. For implementation, select their reviewed release commits and pin full SHAs; refresh deliberately. `action-setup` does not itself install Node. A simple initial sequence is checkout → setup Node → setup pnpm → frozen-lockfile install → checks/build. Add one cache mechanism later, after the uncached path works. [Checkout](https://github.com/actions/checkout), [setup-node](https://github.com/actions/setup-node), [pnpm action](https://github.com/pnpm/action-setup)

Use `pnpm install --frozen-lockfile` and log runtime versions. The workspace explicitly permits esbuild builds and denies sharp builds: do not broadly enable dependency scripts as a speculative fix. Verify the chosen image workflow on Linux. Also, there is currently no `check` script or `@astrojs/check`; a proposed workflow must add an actual checking setup rather than call a nonexistent command.

### Deployment contract and rollback

The following is a proposed design, not a tested server recipe:

1. Run checks for pull requests without deployment secrets. Deploy only trusted `main` pushes and an explicit manual trigger. Give the workflow only the token permissions it needs.
2. Use a dedicated SSH deployment account/key restricted to the site directories. Verify the VPS host key against a trusted fingerprint; do not disable host checking. Store credentials as GitHub secrets, never in source.
3. Upload to `releases/<commit-or-run-id>/`, never directly into the live directory. Validate required files and permissions before activation.
4. Point the web server at a `current` release reference. Switch via a temporary symlink and a same-filesystem rename on a compatible Linux filesystem. A simple unlink-then-link sequence has an avoidable gap; verify the actual filesystem and server behavior before claiming an atomic deployment.
5. Serialize publication with workflow concurrency and a server-side lock. Avoid cancelling the activation section halfway through. Prevent an older run from replacing a newer deployment.
6. Check the public homepage and a known article after activation. On failure, restore the previous reference and report failure. Retain a small number of complete releases; cleanup must exclude active/rollback releases.

GitHub documents branch triggers, manual triggers, timeouts, permissions, and concurrency. Its security guidance recommends full commit SHA action pins and treating untrusted workflow inputs carefully. [Workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax), [Secure use](https://docs.github.com/en/actions/reference/security/secure-use)

A release switch does not solve every asset issue: an already-open page can request a hashed asset from the previous build. Preserve older hashed assets in the serving arrangement or define another compatible retention strategy. Keeping old release directories alone does not expose those assets through a changed `current` root. Server cache behavior also needs verification. Nginx can serve from a configured root, if it is the existing server, but that has not been established. [Nginx root directive](https://nginx.org/en/docs/http/ngx_http_core_module.html#root)

### Cost boundaries

For this public repository, standard GitHub-hosted runners have free execution. Larger runners are charged even for public repos. Artifact storage has separate allowances; GitHub Free currently includes 500 MB shared with Packages, and caches have 10 GB included per repository. [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)

Start with a standard Linux runner, short job timeout, no build matrix, no paid runner, and direct deployment without storing long-lived artifacts. Keep cache limits at the included allowance. Review account billing controls and stop-usage settings before enabling any metered feature; an alert alone should not be assumed to enforce a cap. This architecture requires no new hosting subscription, but it does not guarantee zero cost under every account setting or future usage pattern.

## Phased next session

1. **Agree the content and visual brief:** choose two real project examples, one sample article, the accent direction, and whether “Professional Tinkerer” remains the primary introduction. Compare desktop/mobile reference behavior visually.
2. **Prove publishing locally:** repair the document layout/metadata, add one validated collection and article route, exclude drafts everywhere, and create an Obsidian template. Use standard Markdown first; then run the converter fixture if wikilinks matter.
3. **Prove CI:** pin runtimes and actions, install from the committed lockfile on Linux, add appropriate validation, and build without deploying.
4. **Prove deployment:** inspect the VPS, set up a restricted account and release directories, test a manual deployment and rollback, then enable `main` publishing. Preserve the existing site until this path works.
5. **Apply the design:** implement the approved homepage and article styles against real content; test keyboard navigation, zoom, mobile layout, sticky headers, and long code blocks. Add RSS and sitemap when their draft exclusions are covered.

The remaining decisions are useful future discussion points, not blockers for this research: chartreuse versus orange; separate About/Contact pages; which actual projects lead; how much Obsidian-specific syntax is essential; and whether private drafts should live in a separate vault. My strongest recommendation is to finish one complete write → build → deploy path before expanding either the visual system or the publishing tooling.
