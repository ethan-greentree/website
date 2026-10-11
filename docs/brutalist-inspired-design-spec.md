# Ethan Greentree: brutalist-inspired design

Status: **iteration brief, not a selected or approved final design**.
Updated: 2026-10-11. Intended to be usable in a design tool, another coding assistant, or a visual website builder without requiring access to this repository.

## What we are making

A personal website for Ethan Greentree, an IT professional who enjoys tinkering, explaining things, and learning about technology. It should introduce the person, make writing and future work easy to discover, and have a distinctive personal character. It does not need to resemble a polished agency or corporate landing page.

Explore **earthy brutalism with small cyberpunk and indie-web influences**: chunky type and structure, warm natural surfaces, green ink, selective bright accents. Preserve readable prose and a straightforward reading order. The initial page should work with the content below; no invented projects are necessary to fill the design.

## Agreed foundation

- Mostly cream and sandy surfaces, forest green text and borders, selective bright lime accents. Occasional dark green sections are welcome.
- Square corners, substantial borders, and hard offset shadows used sparingly.
- Expressive, chunky headings; a clean body font; monospace for dates, labels, and other small details.
- Sticky section labels on the left of content on desktop. On mobile, compact headings above the content in normal flow.
- Opening led by Ethan's name and “Professional Tinkerer,” then the main content.
- Personality and exploration matter more than extreme polish.

The treatments below are alternatives within this foundation. They are not a requirement to ship multiple themes. For the newer, smoother direction, see [smooth-earthy-design-spec.md](smooth-earthy-design-spec.md). The square corners and heavy borders in this document belong to this exploration rather than a site-wide constraint.

## References

| Site | Borrow | Improve or avoid |
| --- | --- | --- |
| https://personligarkitektur.no/ | Chunkiness and strong physical structure | Ethan found the text layout clunky; simplify the reading order |
| https://joshpuckett.me/ | Clarity and restraint | Ethan wants more visual character |
| https://www.simonausterberry.co.uk/ | Sticky section headings; strongest reference | Adapt the pattern to Ethan's content and small screens |

These descriptions preserve Ethan's feedback. The studies are interpretations, not copies of the references. No desktop/mobile interaction audit of those sites has been completed.

## Copy and experience boundary

Use the current homepage as the content source. The wording below is a lightly edited draft for layout exploration.

**Confirmed by Ethan:** five years working at KES, plus additional years of tinkering on and off; he is taking that learning more seriously now. Do not translate this into five years of programming, infer a job title at KES, or invent responsibilities, certifications, clients, results, metrics, or projects. Ask Ethan before adding experience claims.

### Header

- Brand: **Greentree**
- Navigation candidates: **How I work**, **Blog**, **Contact**
- Destinations and final navigation order remain open; do not create fake contact details.

### Introduction

Name: **Ethan Greentree**

Primary title: **Professional Tinkerer**

Supporting heading: **I wanted to know how it works. So I built one.**

Introduction: **Hey, I'm Ethan. I enjoy figuring out how things work and turning curiosity into action.**

Optional internal link: **Follow the curiosity ↓** → next section.

### Curiosity

Heading: **I have a lot of questions.**

- How does this work?
- Why does it work that way?
- Can we make it easier?
- What happens if…?

These are statements of curiosity, not automatically clickable cards. Only give them link/button behavior if there is a real destination or action.

### Approach

Heading: **How I work.**

Lead: **I like technology as a means rather than an end.**

Body: **Sometimes the answer might be Laravel, other times, it might be PowerShell. Sometimes it's a spreadsheet or diagram that outlines the process and steps to explore the problem differently.**

Small aside: **Comfortable figuring things out.**

Laravel and PowerShell are examples already in the source homepage, not claims about a particular level of expertise. Do not expand them into skill ratings or experience badges.

### About

Heading: **Curious by default.**

Draft biography: **I've worked at KES for five years. I've also been tinkering on and off for a few years beyond that, and I'm taking that learning more seriously now.**

Body: **I like understanding complicated things, breaking them into pieces and assembling them into a solution for a project.**

Body: **I'm a firm believer in teaching as practice. If I find something interesting, I want others to know about it too!**

Closing aside: **Happiest when something finally clicks.**

### Future content

Selected work and latest writing are candidates once actual entries are available. They are not supplied in this brief. For an outline, annotate their potential placement rather than inventing project titles, publications, screenshots, or achievements. The immediate studies should be complete using the existing content alone.

## Candidate visual settings

These values are starting points for iteration, not fixed brand standards.

| Role | Candidate |
| --- | --- |
| Page background | Cream `#F4F0E6` |
| Text and outlines | Forest `#243D30` |
| Secondary panels | Sand `#D5C9BB` |
| Emphasis | Lime `#D1E85B` |
| Dark section | Forest background with cream text and lime details |
| Borders | Roughly 2–3 px; heavier rules reserved for section accents |
| Corners | Square for site elements |
| Shadows | Hard offset, roughly 4–8 px, selectively applied |
| Content width | Around 1280–1440 px maximum; article text substantially narrower |
| Body type | Around 16–18 px with generous line height |
| Reading measure | Roughly 60–70 characters for long prose |

Try a bold grotesk heading face with a neutral sans-serif body and small monospace labels. Font candidates are **Space Grotesk / Inter**, or a locally available heavy system sans-serif for the first comparison. Do not let acquiring a font or a paid tool block the exploration. The existing Faculty Glyphic heading font is also an option to compare, not a settled choice.

Exact hierarchy matters more than selecting a font immediately. Headings should feel weighty; body text should remain comfortable. Avoid making all text oversized or monospace. Use consistent spacing and a strong alignment system.

## Study A: earthy editorial

**Question:** can a restrained composition still have enough character?

- Full-width header with a modest Greentree wordmark and simple navigation.
- Two-column introduction: large title on a cream left panel; supporting copy and a lime link on a sand right panel. Approximate split: 58% / 42%.
- Thin but confident forest rules separate major regions.
- Following sections: roughly 35% label column / 65% content column, with a generous gap.
- Curiosity prompts appear as open rows separated by rules rather than cards.
- Approach can be a dark green section to punctuate the page.
- About returns to cream and a quieter reading layout.
- On mobile, stack introduction panels and sections; remove sticky positioning from the labels.

Aim for warm, readable, and confident. Add personality through weight, spacing, and a few unexpected details rather than filling every surface with decoration.

## Study B: chunky field notes

**Question:** does a more physical, playful composition better express Ethan?

- Inset page frame with a lime header and heavier forest borders.
- Full-width sandy introduction with an oversized title.
- Place supporting copy inside an offset cream note below the title; give the note a hard shadow.
- Keep left-hand section labels sticky on desktop, with heavy top rules.
- Curiosity prompts become a two-by-two set of chunky lime blocks. Keep their visual treatment readable as noninteractive content unless linked.
- Use sand and cream as alternating section surfaces, with one dark green section.
- On mobile, make the note full-width within normal page padding and collapse grids as needed. No sideways scrolling or tiny type to preserve a desktop composition.

Aim for an independent maker's notebook with technical details. Avoid a fake terminal interface that hides ordinary navigation.

## Cyberpunk and personal details to compare

Small monospace section labels, crisp technical rules, bracket-like marks, and bright accent indicators can add cyberpunk character without a full dark theme. A simple geometric plant/tree mark is optional; the current rough studies include one, but Ethan has not chosen a logo.

Personal asides can supply the indie-web quality. Preserve room for occasional odd, handmade details without turning the homepage into a dashboard of pretend metrics. These are exploratory suggestions, not requirements.

## Interaction and responsive behavior

- Sticky section labels stay within their own sections and do not overlap the footer or obscure keyboard focus.
- Mobile labels appear above content without accumulating sticky bars.
- Anchor links land with their headings visible.
- Links and controls have visible keyboard focus; hover is not the only signal.
- Decorative marks are hidden from assistive technology; heading order remains meaningful.
- Reading works with zoom and narrow widths; long technical content does not force the entire page sideways.
- Motion is optional. Support reduced motion and avoid animated boot sequences or obligatory scroll effects.

Compare at approximately **390 px mobile**, **768 px intermediate**, and **1440 px desktop**, including scrolled states. The rough local studies have desktop screenshot checks. An initial narrow Chrome screenshot used a larger layout viewport and was cropped, so it is not evidence of a verified 390 px mobile layout. Real viewport and keyboard checks remain to do.

## Deliverables to request from another tool

1. Two homepage studies using the same copy: earthy editorial and chunky field notes.
2. Wide and narrow views of each, plus a scrolled view showing section labels.
3. A small style board showing colors, heading/body/label typography, links, borders, and shadows.
4. Notes on what each study prioritizes and what could be combined.

Keep the result editable. A design canvas or HTML/CSS prototype is fine. Do not configure hosting, purchase assets, add analytics, or implement unrelated site features as part of the design comparison.

## Copy-paste prompt

> Explore two homepage designs for Ethan Greentree using this brief and its exact draft copy. He works in IT and likes chunky brutalist/neo-brutalist forms, earthy greens and sandy browns, lime accents, cyberpunk details, and personal indie-web character. The site need not be highly polished. Study A uses a split editorial introduction and open question rows. Study B uses a full-width masthead, an inset note, and boxed question prompts. Use expressive headings, readable body text, small monospace labels, square corners, strong borders, and selective hard shadows. Show sticky left-hand section headings on desktop and normal stacked headings on mobile. Compare identical content at desktop and mobile sizes. Do not invent experience, projects, credentials, metrics, contact details, or skill levels; ask Ethan before adding claims. Treat the supplied KES biography as draft copy based on his confirmation. Provide editable designs and explain the differences. These are alternatives for review, not a selected final direction.

## How to choose

Ethan can choose a whole study or name parts to combine: header from B, introduction from A, section labels from either. Judge readability, character, mobile behavior, comfort with longer text, and ease of adding content. Selecting a palette alone does not settle the layout. Record the chosen pieces before rewriting the production homepage.

## Local rough studies

Run `pnpm design` in this repository. The development homepage supports `/?variant=A` and `/?variant=B`, with a floating switcher and left/right arrow-key navigation. Production builds retain the existing homepage. The study code is throwaway and uncommitted; it should not be promoted unchanged as production implementation.
