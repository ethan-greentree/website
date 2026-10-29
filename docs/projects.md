# Adding projects

Each project is a Markdown file in `src/content/projects/`. The file name becomes the URL: `src/content/projects/yahtz.md` is published at `/projects/yahtz/`. Use lowercase file names with hyphens. Renaming a file changes its URL and requires updating links to it.

```md
---
title: "Yahtz"
summary: "One line shown on the Projects page and used as the page description."
status: "Live"
tech:
  - "Usagi Engine"
  - "Lua"
image: "../../assets/projects/yahtz.png"
imageAlt: "What the screenshot shows, for people who can't see it."
order: 1
featured: true
link:
  label: "Play Yahtz ↗"
  href: "/games/yahtz/index.html"
---

A short description of what the project is and why you made it.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | Yes | Project name. |
| `summary` | Yes | One sentence. |
| `status` | Yes | `Live` (running and usable), `Prototype` (works but rough), or `Retired` (no longer maintained, kept for the record). |
| `tech` | Yes | At least one item. |
| `image` | Yes | Put the screenshot in `src/assets/projects/` and reference it relative to the Markdown file. It is not resized or converted (the site uses Astro's passthrough image service), so commit it at a web-ready size and format. |
| `imageAlt` | Yes | Describe what the image shows. |
| `order` | Yes | Lower numbers appear first on the Projects page. |
| `link` | No | One primary action, such as playing a game. `href` must be a site-relative path starting with a single `/` (not `//`) or an `https://` URL; anything else fails the build. Links to `/games/` open in a new tab. |
| `diagram` | No | Adds a built-in diagram section after the description. The only value is `deployment`, used by the website project; it renders `src/components/DeploymentDiagram.astro`. |
| `featured` | No | Set `featured: true` on exactly one project to show it on the homepage with its screenshot, status and summary. To change the featured project, move the line to another file. The build fails if no project or more than one project is featured. |

The body is the project's description. Keep it short; write longer stories as [Articles](articles.md) and link from the article to the project page. Project pages do not list related articles.

Run `pnpm build` before committing. A missing or invalid field, such as an unknown status, fails the build with a message naming the file.
