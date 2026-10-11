# Portfolio research: review guide

Research date: 2026-10-10. Working recommendations for Ethan to review; not approval to implement or deploy.

## Start here

The intended site is a personal home for an IT professional who enjoys learning and explaining technology. It should help employers and collaborators understand Ethan's work while making room for experiments and interests outside his day job.

The visual wishlist now includes earthy greens and sandy browns, chunky brutalist/neo-brutalist structure, color accents, sticky section labels, cyberpunk, and indie-web influences. A highly polished corporate presentation is not the goal. These influences can coexist, but the exact combination needs a later visual exploration.

## Research files

| Read                                                             | Purpose                                                                                                       |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Proposed design system](../DESIGN.md)                           | Concrete tokens, typography, layouts, components, image treatment, and iteration rules from the 30-site study |
| [30-site neo-brutalist study](research/neobrutalist-websites.md) | Source-linked comparisons, saved visual evidence, historical examples, and decisions to borrow or avoid       |
| [Design wishlist](design-wishlist.md)                            | User preferences, reference sites, and unsettled choices                                                      |
| [Nocturnal dither design](nocturnal-dither-design-spec.md)       | Third direction: dithered night/surreal imagery, black and white, red accents                                 |
| [Smooth earthy design](smooth-earthy-design-spec.md)             | Newer exploration: a smoother, simpler layout with earthy tones and color pops                                |
| [Brutalist-inspired design](brutalist-inspired-design-spec.md)   | Earlier chunky direction, retained as a separate comparison                                                   |
| [Site and publishing research](site-research.md)                 | Original design brief, Obsidian/Astro options, GitHub Actions, Vultr deployment and cost                      |
| [Design workflow research](design-workflow-research.md)          | How to edit and experiment with the design without making maintenance difficult                               |
| [Portfolio feature research](portfolio-feature-research.md)      | Things the site could demonstrate or host, ranked by evidence, effort, cost, and maintenance                  |

Read the companion reports as extensions of the original research. The later IT, cyberpunk, and indie-web preferences take precedence over the original report's narrower framing.

## How to judge an idea

This is a proposed decision rubric, not research claiming what all recruiters prefer:

1. **Relevance:** does it show a skill Ethan uses or wants to develop?
2. **Evidence:** can someone inspect the reasoning, source, result, or reproducible example?
3. **Clarity:** can a visitor understand what it is and Ethan's contribution without learning the interface first?
4. **Personal use:** would Ethan use it or enjoy maintaining it after the initial novelty?
5. **Operating cost:** can it run in the browser or as static content, or does it need a service and ongoing attention?
6. **Honesty:** are lab exercises, simulated data, unverified claims, and real measured results clearly distinguished?

The community's own IndieWeb principles emphasize personal ownership, making and using things for yourself, documentation, and fun. Those values support this site's personal-workbench direction; they do not prescribe a particular visual style. [IndieWeb principles](https://indieweb.org/principles)

## Proposed first milestone

An achievable first milestone is a useful homepage, one genuine project/case study, one learning article, and a working publish pipeline. Then add a small interactive tool that reinforces the story rather than holding the entire launch hostage to an ambitious demo.

Keep a clear route to projects, writing, and contact. Put more experimental visual treatments and interactions in a lab or optional mode if they make the main reading experience harder. This is a candidate balance, not a decision already made by Ethan.

## Highest-priority options from the expanded research

| Area               | Starting recommendation                                                                  | Why it fits                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Design iteration   | Compare earthy blocks, woodland terminal, and personal notebook against the same content | Explore the expanded taste without maintaining three complete themes                 |
| Design maintenance | Shared visual settings and a small local component showroom                              | Change typography, borders, and colors in a predictable place and inspect the effect |
| Portfolio evidence | Document this site's actual deployment and rollback                                      | Uses infrastructure work already needed for the site                                 |
| IT depth           | A tested automation script and a genuine restore drill                                   | Shows reasoning and verification tied to Ethan's trade                               |
| Interactive lab    | One bounded browser-based log or subnet tool                                             | Offers something runnable without adding a server process                            |

These are prioritization judgments. The companion reports explain effort, limitations, source evidence, and finish criteria. If a restore lab is not available, a clearly labeled incident exercise is an alternative. Optional future read-only services are also researched; static hosting is a useful starting point, not a ban on learning backend operations.

## What this research does not establish

- It does not promise employment outcomes or empirical recruiter preferences.
- Source-backed capabilities are distinct from integrations tested in this repository.
- No VPS access or deployment verification was performed.
- The reference sites still need a visual desktop/mobile review; retrieved page text is not a substitute for testing sticky behavior.
- Feature effort estimates are planning judgments, not delivery commitments.

## Next discussion

Pick the preferred visual direction and one feature with the strongest connection to Ethan's actual work. Confirm the outline and evidence available, then turn the first milestone into small implementation tasks. Avoid treating every researched possibility as a requirement.
