# Design workflow research: earthy, cyberpunk, and personal

Researched **2026-10-10**. Companion to [site-research.md](site-research.md) and [design-wishlist.md](design-wishlist.md). This document recommends ways to explore and maintain the design; it does not implement or approve a visual direction.

## Recommendation

Use the existing Astro and Tailwind stack as the primary design tool. Build a small local component showroom and compare three treatments of the **same real homepage section and article excerpt**. Keep typography, spacing, color roles, and borders centrally adjustable. Use an optional free design canvas for early composition; add Storybook or screenshot regression tooling only when repeated work justifies it.

This is enough to make AI-assisted changes reviewable without buying a UI kit, installing an application platform, or expecting Ethan to maintain a large design system. The goal is an expressive personal site that is comfortable to update, not a highly polished agency presentation.

## Preferences to preserve

Ethan's earlier preferences remain valid: chunky brutalist and neo-brutalist structure, some color pop, forest/moss greens and sandy tones, minimalism, sticky section headers, and a connection to the Greentree name. The newer interest in **cyberpunk and indie web** expands that range. It does not mean the earlier direction has been rejected, nor that a dark neon theme is now required.

These tastes describe different dimensions. Chunkiness concerns shape and weight; earthy colors concern palette; sticky labels concern navigation; cyberpunk can influence type, contrast, diagrams, and accents; indie web can influence personal content, ownership, and experimental details. They can coexist. The following combinations are assistant hypotheses to test:

| Study | Shared foundation | Distinctive treatment | Main question |
| --- | --- | --- | --- |
| Earthy blocks | Clear sections, readable prose, strong borders | Cream/sand surfaces, forest ink, one bright accent | Does this feel personal enough? |
| Woodland terminal | Same structure and content | Deep green surface, warm light text, chartreuse signals, small monospace labels | Does it preserve warmth without feeling like a fake terminal? |
| Personal web notebook | Same navigation and article readability | Looser composition, personal asides, small handmade SVG details or badges | Does it invite exploration without making projects hard to find? |

Do not implement three maintained themes yet. Studies are temporary comparison tools. If Ethan later wants an optional cyberpunk mode, semantic tokens can support it; that remains a choice, with additional contrast and state testing.

## Smallest maintainable foundation

### 1. Separate content, structure, and visual settings

Keep posts in Markdown and repeated presentation in Astro components. A project preview should accept a title, summary, image, and destination rather than require editing its markup every time. Astro components support props, slots, and composition and render HTML without requiring a client framework. [Astro component documentation](https://docs.astro.build/en/basics/astro-components/)

Candidate reusable parts are a page container, section heading/label, project preview, article summary, link/button treatment, prose wrapper, and site navigation. These are starting points, not an instruction to create an abstraction for every element. Extract repeated structure when a second real use shows what is shared. Avoid a giant configurable component that tries to express every possible layout through flags.

The page outline should remain understandable in source. Content updates should mean editing one Markdown file or one small structured project entry; choosing a heading style should not require touching every page.

### 2. Use semantic visual roles

The current global stylesheet already defines Tailwind `@theme` colors and a heading font. Extend that foundation intentionally rather than scattering literal colors through components. Tailwind theme variables create utilities and expose CSS variables; normal custom properties remain useful for settings that do not need utility classes. [Tailwind theme variables](https://tailwindcss.com/docs/theme)

Candidate roles include page surface, raised surface, main text, muted text, border, accent surface, accent text, and focus outline. Additional shared settings can cover reading width, section spacing, heading/body fonts, border thickness, shadow offset, and corner radius. This is a proposed vocabulary, not a requirement to add all tokens immediately.

For optional runtime palettes, define role values using ordinary custom properties on a root theme selector, and connect Tailwind utilities to those roles. Keep `@theme` declarations at the top level; do not nest them inside theme selectors. If utilities reference other variables, evaluate Tailwind's documented `@theme inline` behavior so the generated utility resolves the intended role.

Changing `surface` and `ink` together is safer than repeatedly changing “green” to “black” across unrelated classes. Still, tokens do not guarantee good contrast: each theme needs its own foreground/background and interactive-state checks. The earlier report contains a small candidate palette calculation, not a full audit.

### 3. Give typography and layout equal attention

A chunky identity can come from large section labels, generous blocks, hard borders, and compact metadata. It does not require oversized paragraph text. Keep a comfortable article measure; use monospace for code and selected labels if it fits, rather than forcing every paragraph into a terminal aesthetic.

Use a small type scale with clear roles: site introduction, section heading, card title, article heading, body, and metadata. Test the longest real title and descriptions before declaring a scale finished. Let layout respond to content rather than fixed-height cards that clip longer text.

Prototype sticky section labels in a wide two-column section and a narrow single-column layout. Their semantic headings should still make sense without sticky styling. Verify focus visibility and anchor destinations beneath persistent UI; W3C identifies sticky headers as a potential source of obscured focus. [W3C focus visibility guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

## A practical iteration loop

1. **Choose one question.** For example: “Does a dark woodland surface suit the same chunky layout better than cream?” Avoid changing color, fonts, content, and navigation simultaneously.
2. **Use the same content.** One actual project, a long title, a short personal introduction, and an article with headings, links, code, and an image provide a fair comparison.
3. **Compare narrow and wide views.** Screenshot the same sections at repeatable sizes. Include a scrolled state if sticky behavior is under discussion.
4. **Record a specific reaction.** “The heading is good but the labels feel too terminal-like” is more actionable than “less boring.” Mark which parts should survive the next iteration.
5. **Write down the resulting rule.** Examples: “hard shadows only on actionable elements,” or “monospace labels, proportional article body.” Keep tentative rules separate from approved ones.

Reference links remain useful, but a screenshot with a marked region explains taste more precisely. Compare pattern-level ideas without importing another site's branding or assets. The original research retrieved page text, not browser screenshots, so it did not verify those sites' spacing, animation, responsive layouts, or sticky implementation.

AI can help produce small alternatives and explain the consequences of changes. It needs a stable brief and visible comparisons to avoid generating a different aesthetic every session. Save accepted examples and concise design decisions in repository docs; no new agent-instruction rules are proposed here.

For a later session, a useful request would be:

> Read the design wishlist and use this reference screenshot for the section labels. Explore two treatments of the same homepage section: cream/forest blocks and a dark woodland-terminal palette. Keep the actual text and content order consistent so I can compare the styling. Make color, spacing, and border adjustments easy to find. Show narrow and wide previews, identify anything you could not visually verify, and explain the tradeoffs before applying the chosen treatment across the site.

This is an example prompt, not authorization to build those studies now. Once a treatment is accepted, subsequent requests can be much smaller: change one shared setting, review it against the actual article and project preview, then keep or revert it.

## Local showroom versus Storybook

**Start with an Astro-only showroom**, available in local development and deliberately excluded from production routes. It should render the actual components with realistic variants: long/short titles, missing optional image, metadata, article elements, focus states, and candidate palettes. A normal page gives these components the real site CSS and layout environment.

A showroom is a suggested future implementation, not something created by this research. It must not accidentally become a public draft-content preview. Keeping its fixtures synthetic and controlling production inclusion are separate requirements.

Storybook offers organized component stories and documentation, but it adds configuration and an integration to maintain. The current Astro integration identifies itself as **community-supported**. Its compatibility with this exact Astro 7.3.8/Tailwind 4.3.3/pnpm 12 project was not tested. [Storybook Astro getting started](https://storybook-astro.org/getting-started/), [Storybook framework support](https://storybook.js.org/docs/configure/integration/frameworks-feature-support)

Consider it later if the site grows into a shared component library, has many interactive states, or needs independent component review. For a few portfolio components, the local page answers the immediate design questions with less setup. Do not add React merely to make a component catalogue possible.

## Interactive experiments without a full application

Astro can use ordinary browser scripts for event handling, custom elements, and simple controls. A local color or spacing playground can update CSS custom properties and leave the published page static. This does not require an SSR server. [Astro scripts and events](https://docs.astro.build/en/guides/client-side-scripts/)

If a future interactive demo genuinely needs React, Svelte, or another framework, Astro can hydrate selected framework components using client directives. Only opt in where interactivity earns its cost; the surrounding portfolio and article content can remain ordinary rendered HTML. [Astro framework components](https://docs.astro.build/en/guides/framework-components/)

Good experiments include a palette selector in the development showroom, a border/spacing comparison, or an interactive diagram embedded in a specific technical article. A site-wide terminal emulator, animated boot sequence, or persistent simulated HUD is an unapproved creative idea, not a consequence of liking cyberpunk.

If experimenting with motion, ensure it can be reduced or disabled appropriately. W3C's animation-from-interactions guidance describes the vestibular impact and mechanisms to disable nonessential interaction-triggered motion; that particular success criterion is Level AAA. [W3C animation guidance](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

## Affordable tools and their boundaries

| Tool | Useful role | Cost/licensing boundary |
| --- | --- | --- |
| Existing Astro + Tailwind | Working layout, type, component, and theme experiments | Already in this project; no additional design subscription proposed |
| Browser DevTools | Adjust sizes/styles, inspect layout, emulate viewports | Use the browser already available; emulation does not replace real-device testing |
| Penpot | Optional composition, vector details, shared mockups | Hosted Professional plan has a free tier; paid plans exist; self-hosting adds operational work |
| Figma Starter | Optional reference board and a few screens | Free Starter tier exists; team file/page and AI usage limits apply |
| Playwright | Later repeatable screenshots of important pages | Local automation requires dependencies/browsers and maintenance; cloud services are separate decisions |

Penpot's pricing page advertises a free Professional entry tier. Its open-source repository provides the license and self-hosting source; that is not an argument to install it on this small VPS. Use hosted free tooling if a canvas helps, and check current limits before relying on a particular sharing/storage feature. [Penpot pricing](https://penpot.app/pricing), [Penpot source/license](https://github.com/penpot/penpot)

Figma's pricing FAQ says Starter supports collaborative editing on up to three files with three pages per file. This is sufficient for a small exploration board but should not be described as unlimited free team design storage. AI generation and paid seats are unnecessary for the proposed workflow. [Figma pricing FAQ](https://www.figma.com/pricing-faq/), [Starter overview](https://help.figma.com/hc/en-us/articles/13838684089751-Starter-plan-overview)

Community kits, fonts, icons, and illustrations have their own licenses even when the editing tool is free. Prefer original CSS/SVG details and separately verified assets; a free gallery preview does not grant reuse rights. No paid kit or design tool is required by this recommendation.

## Browser verification and evidence

The tools exposed in this research session provide web-page retrieval, shell execution, and local-image inspection. Discovery did not expose a dedicated browser automation connector. Playwright and browser binaries have not been installed or exercised for this task. Consequently, there is no screenshot evidence supporting a completed visual review.

For implementation, a human browser review can start immediately with Astro's local preview. Chrome's Device Mode supports viewport simulation and related testing, but its documentation notes that simulation is an approximation; test an actual phone when possible. [Chrome Device Mode](https://developer.chrome.com/docs/devtools/device-mode)

After a design is accepted, add a few Playwright screenshot checks if regressions become a real problem. Capture a homepage, article, and sticky-section state at fixed sizes. Keep the execution environment consistent: Playwright notes that screenshot output can vary with operating system, browser version, hardware, and settings. Treat baseline changes as visual review tasks rather than automatically accepting them. [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots)

Manual checks still matter: keyboard navigation, zoom/reflow, readable focus states, real image loading, reduced motion, long URLs/code, and navigation after Astro client transitions if retained. A screenshot cannot establish keyboard behavior or accessibility by itself.

## Indie web: useful influence without extra infrastructure

IndieWeb's principles emphasize owning your content and using your own site, while supporting experimentation. Those ideas fit the chosen domain, Markdown source, and independently hosted static output. They are not a prescribed visual style. [IndieWeb principles](https://indieweb.org/principles)

Personal touches could include a small “currently exploring” note, a colophon explaining how the site is made, or links to people/projects Ethan values. These are content suggestions, not requirements to emulate a nostalgic web aesthetic.

Webmention is relevant only if Ethan later wants notifications or conversations across personal sites. It introduces receiving/storage/moderation decisions or an external service, so it should remain a separate future feature rather than part of the first static deployment. [IndieWeb Webmention overview](https://indieweb.org/Webmention)

## Next decisions

First compare the earthy-block, woodland-terminal, and personal-notebook studies using identical content. Decide which pieces work together, then approve one foundation. Settle the sticky mobile behavior and article typography before adding decorative details. Finish the first publishing path from the earlier report, and keep design iteration local until ready.

The smallest viable workflow is **references → real-content comparison → shared tokens/components → browser review → documented choice**. It leaves room for cyberpunk and indie-web expression without making continuous polish or extra paid tooling a condition of publishing.
