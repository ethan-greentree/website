# Hi, I'm Ethan Greentree

IT by trade. Curious by default. Happiest when something finally clicks.

I believe in teaching as practice. If I find something interesting, I want to understand it well enough to share it with someone else. [My website](https://ethangreentree.com) is a place for that work, from small games to the infrastructure that keeps the site running.

## What I'm exploring

- **AI-assisted development.** I built [Yahtz](https://ethangreentree.com/games/yahtz/index.html), a Yahtzee-inspired game for my wife. We brainstormed the mechanics together, and I practised guiding development through questions, documented requirements, and iteration.
- **Containers and automation.** This site is built with Astro, served by NGINX in Docker, and deployed through GitHub Actions. Automating deployment helped me spend more time building and allowed me to learn a little DevOps.
- **Learning by making things.** These projects give me room to practice, discover what I don't understand yet, and try something more ambitious next time.

My wife and I enjoy games, particularly board games. So when I'm not on a computer, chances are I'm playing one or walking my dog!

## Find me

- [Articles](https://ethangreentree.com/blog/)
- [Projects](https://ethangreentree.com/projects/)
- [LinkedIn](https://www.linkedin.com/in/ethan-greentree)
- [Email](mailto:ethangreentree@gmail.com)

## Running this website

Development can follow the [agent-neutral software factory](docs/agents/factory/README.md):
specification, implementation, four review passes, and an approval decision.
In Codex, use `$factory start issue #123` or `$factory next` to invoke the
repository skill. See the factory docs for resume, approval, and rework commands.

Everything runs through [Vite+](https://viteplus.dev/) and its `vp` command.
Requires Node.js 22.18, or 24.11 or newer. Install the `vp` command once
([instructions](https://viteplus.dev/guide/)), or prefix each command below
with `pnpm exec`. Run `vp install`, then:

| Command          | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| `vp run dev`     | Start the development server at `http://localhost:4321` |
| `vp run design`  | Start the development server and open the homepage      |
| `vp run build`   | Build the production site into `dist/`                  |
| `vp run preview` | Preview the production build locally                    |
| `vp check`       | Check formatting, lint and types                        |
| `vp check --fix` | Fix formatting and the lint issues that can be fixed    |
| `vp test`        | Run the tests in `tests/`                               |

Use `vp run dev`, not `vp dev`: `vp dev` starts a plain Vite server rather
than Astro. Both development commands replace an existing Astro server for
this project. Settings for checks and tests live in `vite.config.ts`.

`vp fmt` doesn't format `.astro` files yet, so format them in your editor
(the Astro extension handles it). `vp lint` does check the scripts inside
them, and the GitHub Actions **Check** workflow runs `vp check`, `vp test` and
a build on every pull request and push to `main`.
