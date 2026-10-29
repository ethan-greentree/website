# Ethan Greentree — design system

Status: layout A approved as the real site in the interview, 2026-10-11; the homepage was redesigned as a scrolling story in the interview of 2026-10-28 (issue #20). Keep the current palette and system typography for this first version. This supersedes the earlier red/dither proposal and development-only composition studies.

See the [30-site reference study](docs/research/neobrutalist-websites.md). These interview decisions take precedence over earlier research proposals. Superseded briefs are available in Git history.

## Direction

**Earthy neo-brutalism, substantial like a large building, with room to breathe.** A personal corner of the web with a clear professional introduction. Writing is the immediate priority; projects appear when genuine material is available.

Chunkiness comes from broad rectangular regions, aligned edges, strong horizontal divisions, heavy headings, generous internal padding, and selected hard shadows. Use a few substantial forms separated by open space. Avoid claustrophobic card grids and oversized empty sections.

## Confirmed decisions

- Sandy paper, near-black, and substantial green areas. Exact shades remain candidates.
- Mostly square shapes with small corner rounding.
- Heavy sans headings and comfortable body text. Keep the current system stack for now; a custom heading face can be explored later.
- Homepage story order: who I am (name), what I make (one featured project), where to go next (latest Articles, short about, contact). See [Homepage composition](#homepage-composition).
- Spacious article rows: prominent title, summary, quieter date/topic. Images optional. The Articles index separates rows with rules; the homepage separates them with space.
- Ordinary section headings, **never sticky**. Restrained motion; none on the homepage.
- Introduction works without decorative imagery. **Little or no dither; none in the first studies.**

## Research translated into rules

| Evidence                                                     | Application                                        |
| ------------------------------------------------------------ | -------------------------------------------------- |
| Gitingest and Code in Public make purpose visible            | Prioritize writing and real work                   |
| creme332 uses shared edges and distinct regions              | Large structural forms instead of repeated cards   |
| Seen and FlowFest combine expressive type and quieter fields | Earthy warmth with space to read                   |
| Finder and neo component references use tactile controls     | Consistent outlines and selective hard shadows     |
| Techgroove documents a limited palette                       | Record rationale and vary one major axis at a time |

These are design inferences, not copied brand specifications or claims about hiring outcomes. The interview replaces the earlier sticky-heading and nocturnal/dither directions.

## Current tokens

These are defined in `src/styles/global.css`. Light is the default theme; a header toggle switches to the dark theme, which overrides only the colours.

```css
:root {
  color-scheme: light;
  --paper: #f1eadc;
  --ink: #20291e;
  --muted: #545c4e;
  --green: #c3d39a;
  --green-deep: #344b31;
  --rule: 3px solid var(--ink);
  --radius: 3px;
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --paper: #232720;
  --ink: #eee8da;
  --muted: #b7bcae;
  --green: #364632;
  --green-deep: #c3d39a;
}
```

Use a 4px spacing foundation: 8, 12, 16, 24, 32, 48, 64, 96px. Give major sections 64–96px desktop breathing room and 40–64px on mobile. Article rows use 28–40px vertical padding. Borders organize large forms; shadows identify selected controls. Do not enclose every paragraph or decorate every label.

Paper is the reading field, ink carries information, green occupies a few substantial regions (page headings, and on the homepage the opening ribbon and featured project band). No legacy red accent or alternating rainbow sections. Verify contrast in actual states before production.

## Typography

Heavy sans headings paired with quiet body text. The site uses Arial/Helvetica with a sans-serif fallback to avoid font-download dependencies. A custom heading face is a later refinement. Retain licenses for any vendored fonts.

| Role            | Candidate size    | Treatment                                 |
| --------------- | ----------------- | ----------------------------------------- |
| Name / h1       | 3–7rem fluid      | Heavy, tight tracking, around 1.0 leading |
| Section heading | 2–3.5rem fluid    | Heavy and literal                         |
| Article title   | 1.5–2.25rem fluid | Strong but subordinate to section title   |
| Introduction    | 1.25–1.5rem       | 35–45ch, 1.5 leading                      |
| Body            | 1.125rem          | 60–65ch, 1.65 leading                     |
| Metadata        | 0.8125–0.875rem   | Quiet, optional monospace                 |

The name is the identity. Avoid giant generic persona slogans. Let long article titles wrap naturally.

## Homepage composition

Decided in the interview of 2026-10-28 (issue #20), replacing Layout A's green introduction, ruled Articles region and about block on the homepage. Run `pnpm design` to open it.

The homepage is a scrolling story of tall, spacious sections, one idea each, in this order:

1. **Opening (who I am):** the h1 name at its largest size and the "IT by trade. Curious by default." line on an unbordered green ribbon that spans the full browser width, set below the header by the same gap that separates it from the statement (64px; 40px on phones), while the text stays aligned with the page content (added in reworks 1–2, 2026-10-28). No button or scroll cue. The ribbon's minimum height is 70% of the space below the header, so it reads as a band rather than a full screen and the statement is visible in the first screen at 1280×800 and 390×844; re-check both if the header height or opening type changes.
2. **Statement:** one large line, "I enjoy figuring out how things work and sharing what I learn along the way."
3. **Featured project (what I make):** the page's second green region, a ruled band within the page margins holding the screenshot, a "Featured project" label, the project title (h2), status, summary, a primary link to the project page and a link to all projects. The project is chosen with `featured: true` in its file (see [docs/projects.md](docs/projects.md)); the build fails unless exactly one project is featured.
4. **Latest writing:** the three newest Articles with title, date and summary, separated by space rather than rules, then a link to all Articles.
5. **Ending (where to go next):** a short about drawn from the About copy and a primary "Say hello" link to Contact (the About link was removed in rework 5; About stays in the navigation).

Sections are separated by space (96px desktop, 64px phone), not rules. The only strong shapes are the header and footer rules, the featured band and its screenshot, the status label and the primary buttons. There is no motion or scroll effect beyond the shared button press. Homepage links invite the click in plain first-person words ("See how Yahtz came together", "Read all my articles", "Get to know me", "Say hello") and do not use arrows.

Inner pages keep Layout A's shape: the shared header and footer, a ruled green page heading, then paper. Articles, Projects, About and Contact have dedicated routes using the same palette, controls and responsive rules. Navigation uses real page destinations and marks the current page. The former B side-column alternative remains in Git history.

## Component contracts

| Component       | Contract                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Header          | Name/home, Articles, Projects, About, Contact; real destinations only                            |
| Opening         | Name and confirmed tagline on paper; most of the first screen; no decorative image or scroll cue |
| Section heading | In-flow h2; strong rule or space, never sticky                                                   |
| Article row     | Real title, optional summary, date/topic, native text link; roomy padding and shared separators  |
| Project feature | One featured Project on the homepage: screenshot, title, status, summary, project page link      |
| Primary action  | Native anchor/button; outline, compact hard shadow, visible pressed state                        |
| Reading surface | Open prose; notes and code get distinct treatment when warranted                                 |
| Footer          | Concise contact/source links; RSS feed link (`/rss.xml`, implemented)                            |

## Content and imagery

Confirmed: IT by trade, five years at KES, additional intermittent tinkering, sharing broader technology learning. Do not infer duties, seniority, certifications, outcomes or completed projects.

Writing is the focus. Hide empty project areas. Home and Writing show an honest “Writing coming soon” state until genuine posts exist. Keep the approved introduction and KES biography. Contact offers email, GitHub, and LinkedIn; a résumé link is deferred until Ethan refines the content (GitHub issue #1).

Every page shares one link preview image, `public/og-image.png` (1200×630, source `docs/assets/og-image.svg`): the name in heavy ink type inside a ruled green region on paper, with the domain and the confirmed "IT by trade. Curious by default." line. It is typography only, not evidence of work.

Images are optional and explain their subject: photographs, diagrams, screenshots, actual artifacts. Keep technical evidence readable. No dither in the first studies. Never use generated imagery as evidence of work. Record source, creator, exact license, attribution and modifications for published assets; research screenshots are not reusable portfolio assets.

Images are not resized or converted at build time, so commit every image at a web-ready size and format. Images imported through `astro:assets`, such as project screenshots in `src/assets/`, use the passthrough image service (`astro.config.mjs`): they get hashed URLs and width/height attributes, nothing more. Article images in `public/` are served as-is. This avoids the native `sharp` dependency, which would also have to work in the Docker build. If resizing is needed later, add `sharp`, allow its build script in `pnpm-workspace.yaml` (currently `sharp: false`), and verify it in the Docker build.

## Reading and maintenance

Article pages use a back link and the shared green banner for the title and publication date, followed by a readable Markdown body. Headings, lists, images, blockquotes, tables and code are supported; wide code and tables scroll locally. The Articles index lists titles and dates newest first; the homepage shows the three newest with their summaries. The section is called Articles and retains `/blog/` URLs. The minimal title/date presentation supersedes the earlier summary/topic row proposal for this version. See [the authoring guide](docs/articles.md) and [blank Obsidian template](docs/templates/article.md).

## Interaction and verification

Mostly still. Controls can press through a small translation and hard-shadow change around 120ms. Links get underline/focus feedback. Respect reduced motion. No cursor replacement, marquees or scroll entrances.

Use native landmarks, one h1, logical headings, skip link, visible keyboard focus and comfortable targets. Before production verify contrast, keyboard access, 200% zoom, 320/390/768/1440px widths, long titles and code/table overflow. These are acceptance criteria, not accessibility certification.

## Dark mode (issue #5)

A header toggle (in the footer on phones) switches between the default light theme and a dark theme. Dark mode uses warm charcoal (`#232720`), cream text (`#eee8da`), muted sage text (`#b7bcae`) and forest green (`#364632`); see [Current tokens](#current-tokens). The same layout, typography and shared color tokens apply on every page.

The selection persists in browser storage and is applied before the page paints. If storage is unavailable, toggling still works on the current page. The button has a visible action label and exposes the dark-mode state to assistive technology; without JavaScript, the site stays light and the toggle stays hidden.

## Next decisions

Add genuine articles using the Markdown publishing workflow, refine the résumé, then revisit typography and color if needed. Obsidian wikilink support is deferred; use standard Markdown links. Change one major axis per iteration. Explain decisions in terms of spaciousness, identity and access to writing.
