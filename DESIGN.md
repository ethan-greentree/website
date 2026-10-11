# Ethan Greentree — design system

Status: direction confirmed in the interview, 2026-10-11. Composition and exact fonts/colors await visual comparison. This supersedes the earlier red/dither proposal; neither prototype is approved for production.

See the [30-site reference study](docs/research/neobrutalist-websites.md). These interview decisions take precedence over earlier research proposals. Superseded briefs are available in Git history.

## Direction

**Earthy neo-brutalism, substantial like a large building, with room to breathe.** A personal corner of the web with a clear professional introduction. Writing is the immediate priority; projects appear when genuine material is available.

Chunkiness comes from broad rectangular regions, aligned edges, strong horizontal divisions, heavy headings, generous internal padding, and selected hard shadows. Use a few substantial forms separated by open space. Avoid claustrophobic card grids and oversized empty sections.

## Confirmed decisions

- Sandy paper, near-black, and substantial green areas. Exact shades remain candidates.
- Mostly square shapes with small corner rounding.
- Heavy, characterful sans headings and comfortable body text. Compare actual heading fonts after choosing composition.
- Short introduction, prominent writing section, about, contact. Projects are optional for now.
- Spacious ruled article rows: prominent title, summary, quieter date/topic. Images optional.
- Ordinary section headings, **never sticky**. Restrained motion.
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

## Candidate tokens

```css
:root {
  --paper: #f1eadc;
  --paper-inset: #e2dacb;
  --ink: #20291e;
  --muted: #545c4e;
  --green: #c3d39a;
  --green-deep: #344b31;
  --rule: 3px solid var(--ink);
  --radius: 3px;
  --shadow-control: 4px 4px 0 var(--ink);
  --page-max: 80rem;
  --measure: 65ch;
  --gutter: clamp(1.25rem, 4vw, 4rem);
}
```

Use a 4px spacing foundation: 8, 12, 16, 24, 32, 48, 64, 96px. Give major sections 64–96px desktop breathing room and 40–64px on mobile. Article rows use 28–40px vertical padding. Borders organize large forms; shadows identify selected controls. Do not enclose every paragraph or decorate every label.

Paper is the reading field, ink carries information, green occupies one substantial region. No legacy red accent or alternating rainbow sections. Verify contrast in actual states before production.

## Typography

Heavy characterful sans headings paired with quiet body text. The composition studies use a local system stack to avoid font-download dependencies. Later compare two actual heading faces on identical content; Bricolage Grotesque is one candidate. Retain licenses for vendored fonts.

| Role            | Candidate size    | Treatment                                 |
| --------------- | ----------------- | ----------------------------------------- |
| Name / h1       | 3–7rem fluid      | Heavy, tight tracking, around 1.0 leading |
| Section heading | 2–3.5rem fluid    | Heavy and literal                         |
| Article title   | 1.5–2.25rem fluid | Strong but subordinate to section title   |
| Introduction    | 1.25–1.5rem       | 35–45ch, 1.5 leading                      |
| Body            | 1.125rem          | 60–65ch, 1.65 leading                     |
| Metadata        | 0.8125–0.875rem   | Quiet, optional monospace                 |

The name is the identity. Avoid giant generic persona slogans. Let long article titles wrap naturally.

## Two composition studies

Both use identical copy, specimens, typography, palette and controls. Only composition changes. Development-only on the existing homepage, switchable through `/?variant=A` and `/?variant=B`. Run `pnpm design`.

**A — Broad foundation:** a horizontal header, wide green introduction, then a full-width paper writing region. About and contact below.

**B — Side structure:** a horizontal header, substantial green identity column beside a sandy writing region on desktop. The column is in normal flow, not sticky. Introduction then articles on mobile. About and contact follow.

Question: which arrangement feels substantial and spacious while making articles easy to find? Choose composition before refining font and color.

## Component contracts

| Component       | Contract                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------- |
| Header          | Name/home, Writing, About, Contact; real destinations only                                      |
| Introduction    | Name, concise confirmed context, optional writing anchor; no required decorative image          |
| Section heading | In-flow h2; strong rule or space, never sticky                                                  |
| Article row     | Real title, optional summary, date/topic, native text link; roomy padding and shared separators |
| Project feature | Genuine artifact, problem, contribution, result/limitations, repository/demo when available     |
| Primary action  | Native anchor/button; outline, compact hard shadow, visible pressed state                       |
| Reading surface | Open prose; notes and code get distinct treatment when warranted                                |
| Footer          | Concise contact/source links; RSS only when implemented                                         |

## Content and imagery

Confirmed: IT by trade, five years at KES, additional intermittent tinkering, sharing broader technology learning. Do not infer duties, seniority, certifications, outcomes or completed projects.

Writing is the focus. Hide empty project areas. Prototype article titles are explicitly labeled specimens, not published work, and have no dead article links.

Images are optional and explain their subject: photographs, diagrams, screenshots, actual artifacts. Keep technical evidence readable. No dither in the first studies. Never use generated imagery as evidence of work. Record source, creator, exact license, attribution and modifications for published assets; research screenshots are not reusable portfolio assets.

## Reading and maintenance

Article pages use back link, title, real metadata, optional summary and readable body. Support headings, lists, captions, blockquotes, tables and code. Wide code/tables scroll locally. Authors provide Markdown rather than CSS or custom layouts; publishing a new post should not require a design pass. Publishing features remain proposals until implemented.

## Interaction and verification

Mostly still. Controls can press through a small translation and hard-shadow change around 120ms. Links get underline/focus feedback. Respect reduced motion. No cursor replacement, marquees or scroll entrances.

Use native landmarks, one h1, logical headings, skip link, visible keyboard focus and comfortable targets. Before production verify contrast, keyboard access, 200% zoom, 320/390/768/1440px widths, long titles and code/table overflow. These are acceptance criteria, not accessibility certification.

## Next decisions

Choose composition from the two proofs, compare heading faces, refine sand/green, then test a real article. Change one major axis per iteration. Explain decisions in terms of spaciousness, identity and access to writing.
