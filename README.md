# Ethan Greentree's personal website

Built with Astro and Tailwind CSS. Requires Node.js 22.12 or newer and pnpm.

## Local development

Run `pnpm install`, then use these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `pnpm run dev` | Start the development server at `http://localhost:4321` |
| `pnpm design` | Start the server and open the homepage |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |

Both development commands replace an existing Astro server for this project.

The selected layout A is the real homepage in both development and production. Home, Writing (`/blog/`), About, and Contact share the same design. Writing has a coming-soon state until real posts are ready; the résumé remains a future task. Earlier composition studies are available in Git history.

## Projects

The Projects page lives at `/projects/`. Yahtz is served at `/games/yahtz/index.html` from
`public/games/yahtz/`. To update the game, replace its exported `index.html`,
`usagi.js`, `usagi.wasm`, and `game.usagi` together. Keep the launcher title
and viewport metadata when replacing `index.html`. Game files are copied into
the production build and shipped in the existing Docker image.

## Documentation

- [Static Docker setup and deployment instructions](docs/deployment.md)
- [Design direction and component rules](DESIGN.md)
- [Reference study and visual evidence](docs/research/neobrutalist-websites.md)
- [Publishing and deployment research](docs/site-research.md)
- [Future portfolio feature ideas](docs/portfolio-feature-research.md)

Track future work in [GitHub Issues](https://github.com/ethan-greentree/website/issues). Research documents contain proposals, not implemented features. DESIGN.md takes precedence for visual decisions.
