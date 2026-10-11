# Ethan Greentree's personal website

Built with Astro and Tailwind CSS. Requires Node.js 22.12 or newer and pnpm.

## Local development

Run `pnpm install`, then use these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `pnpm run dev` | Start the development server at `http://localhost:4321` |
| `pnpm design` | Start the server and open the homepage design study |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |

Both development commands replace an existing Astro server for this project.

The homepage design studies are development-only. Compare `/?variant=A` (broad foundation) and `/?variant=B` (side structure). Production builds use the existing homepage rather than the prototype.

## Documentation

- [Design direction and component rules](DESIGN.md)
- [Reference study and visual evidence](docs/research/neobrutalist-websites.md)
- [Publishing and deployment research](docs/site-research.md)
- [Future portfolio feature ideas](docs/portfolio-feature-research.md)

Track future work in [GitHub Issues](https://github.com/ethan-greentree/website/issues). Research documents contain proposals, not implemented features. DESIGN.md takes precedence for visual decisions.
