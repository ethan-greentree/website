# Ethan Greentree: smooth earthy design

Status: **one design direction to explore; not a finalized design**.
Updated: 2026-10-11. A portable brief for another design tool or coding assistant.

## Intent

A simple, welcoming personal website with earthy colors and small, confident pops of color. Ethan works in IT and shares things he builds, learns, and finds interesting. The site should feel personal, calm, and easy to explore, with enough character to avoid becoming a generic template.

This is a separate alternative to [the brutalist-inspired design](brutalist-inspired-design-spec.md). Earlier preferences for square corners, heavy borders, hard shadows, and very chunky headings are specific to that older direction. For this study, explore softer shapes, lighter structure, and more breathing room.

## Visual direction

- Warm cream background with forest green text.
- Pale sand and muted sage for occasional surfaces or section accents.
- A fresh yellow-green accent for the main action and selected details. Explore a small apricot accent only if it adds something useful.
- Clear, moderately bold headings with a little personality; comfortable sans-serif body text.
- Gently rounded buttons and occasional panels. Most content sits directly on the page.
- Structure comes from spacing, alignment, and a few light dividers.
- Depth is optional: a quiet soft shadow on one or two elements rather than a shadow on every surface.
- A small botanical or geometric mark is optional. The name and palette can carry the Greentree association themselves.

Color pops should identify important actions or add a small moment of delight. Keep most of the page quiet so the accents retain their effect.

## Candidate palette and settings

These are initial exploration values, not approved brand tokens or audited accessibility pairings.

| Role | Starting point |
| --- | --- |
| Main background | Warm cream `#F7F5EE` |
| Main text | Deep forest `#263D32` |
| Secondary surface | Sand `#EAE3D6` |
| Gentle accent surface | Sage `#DEE8D8` |
| Primary color pop | Fresh lime `#CDE879`, with forest text |
| Optional secondary pop | Apricot `#ECAF88`, with forest text |
| Divider | A subdued green-gray selected against its actual background |
| Panel radius | Approximately 12–18 px |
| Button radius | Approximately 10–14 px; compare with a pill shape |
| Body text | Approximately 17–18 px, with generous line height |
| Prose width | Approximately 60–70 characters |
| Page width | Approximately 1100–1200 px maximum |

Check contrast for all final text and interactive states. Use color with labels and visible states rather than as the only indication of meaning.

## Homepage composition

### Header

An understated Greentree wordmark on the left and a small set of text links on the right. Start with How I work, Blog, and Contact, but leave the final navigation open until the destinations are useful. Use generous spacing and a light touch. The header can remain in normal flow.

### Introduction

Use a generous, mostly open introduction within the page's content width. Ethan's name is easy to find. “Professional Tinkerer” is the main heading, with the supporting sentence and short introduction immediately nearby.

Prefer one clear reading path rather than enclosing the entire introduction in a card. Compare a modest asymmetry: copy on the left and a small abstract botanical detail on the right. A typographic-only version is equally valid. Do not invent a portrait or require decorative art to finish the page.

A single lime action, such as “Follow the curiosity,” links to the next section. Let the section end naturally with generous spacing or a subtle divider.

### Curiosity

Use the existing questions as a small editorial moment. Try a simple vertical list with small colored marks, or a loose two-column arrangement with ample space. These are text, not clickable cards unless given actual destinations.

### Approach and about

Continue with a consistent two-column section pattern on desktop: a compact label on the left and readable content on the right. Sticky section labels remain worth exploring because Ethan liked them in the Simon Austerberry reference. Give them a quiet treatment; on mobile, put them above the content in normal flow.

Use one sage or sand surface if it helps distinguish a section. Avoid turning every paragraph into a container. Allow the biography and personal asides to feel like an actual person's writing.

### Footer and future content

Finish with a small wordmark and real destinations. No invented email address or social account.

Selected work and latest writing can be introduced when actual entries are supplied. Annotate possible placement in a mockup if helpful, but do not fabricate project cards, article titles, metrics, or achievements.

## Draft copy to use in the comparison

Use this copy consistently so differences in styling can be judged fairly:

- **Name:** Ethan Greentree
- **Main heading:** Professional Tinkerer
- **Supporting heading:** I wanted to know how it works. So I built one.
- **Introduction:** Hey, I'm Ethan. I enjoy figuring out how things work and turning curiosity into action.
- **Action:** Follow the curiosity ↓
- **Curiosity heading:** I have a lot of questions.
- **Questions:** How does this work? / Why does it work that way? / Can we make it easier? / What happens if…?
- **Approach heading:** How I work.
- **Approach lead:** I like technology as a means rather than an end.
- **Approach body:** Sometimes the answer might be Laravel, other times, it might be PowerShell. Sometimes it's a spreadsheet or diagram that outlines the process and steps to explore the problem differently.
- **Aside:** Comfortable figuring things out.
- **About heading:** Curious by default.
- **Biography:** I've worked at KES for five years. I've also been tinkering on and off for a few years beyond that, and I'm taking that learning more seriously now.
- **About body:** I like understanding complicated things, breaking them into pieces and assembling them into a solution for a project.
- **About body:** I'm a firm believer in teaching as practice. If I find something interesting, I want others to know about it too!
- **Closing aside:** Happiest when something finally clicks.

The biography reflects Ethan's confirmation, but remains editable draft wording. Do not infer a job title at KES or describe this as five years of programming. Laravel and PowerShell come from the original homepage; they are not evidence of a specific skill level. Ask before adding experience, duties, credentials, clients, results, or project claims.

## Typography and interaction

Compare a clean humanist or geometric sans-serif heading face with a neutral body face. Keep the main heading expressive without dominating multiple screens. Small monospace details are optional, not a required terminal aesthetic.

Use clear focus states, descriptive links, and readable heading order. Hover effects can be a subtle color or border change; motion is optional and should respect reduced-motion preferences. Anchor destinations must remain visible beneath any persistent elements.

At approximately 390 px, stack content with comfortable side padding; let long headings wrap naturally. At intermediate widths, keep navigation and text from crowding. At approximately 1440 px, constrain the page width rather than stretching prose across the viewport. Test zoom, keyboard navigation, and scrolled sticky states.

## Two useful variations within this direction

1. **Quiet botanical:** more open cream space, modest heading scale, sage highlights, and one lime action. Most structure comes from typography and spacing.
2. **Warm editorial:** a stronger introductory headline, slightly asymmetric composition, a sand or sage section, and a few brighter lime details. Still use light borders and soft shapes.

Compare identical content in both. Avoid reintroducing heavy outlines and hard shadows simply because they appear in the earlier prototype.

## Prompt for another tool

> Design a smoother, simpler earthy personal homepage for Ethan Greentree using the supplied draft copy. Use warm cream, forest green, sand, and sage, with selective fresh lime pops. Aim for calm personality, generous whitespace, readable typography, gentle rounded shapes, light dividers, and restrained depth. Most content should sit openly on the page rather than inside cards. Explore a quiet botanical treatment and a slightly bolder warm editorial treatment using identical content. Include a compact header, a clear introduction, curiosity questions, approach, about, and a small footer. Try quiet sticky section labels beside content on desktop and normal headings above it on mobile. Provide editable desktop and mobile studies plus a palette/type sample. Do not invent experience, projects, portraits, credentials, metrics, or contact details. Ask Ethan before adding claims. These are design studies for review, not an instruction to implement or deploy the final site.

## Review criteria

Does it feel like Ethan's personal space? Is the color pop deliberate? Can longer writing fit comfortably? Does the layout remain clear on a phone? Could new content be added without redesigning the page? Use these questions to choose or combine the variations before implementation.

The existing local A/B prototype represents the older brutalist-inspired direction. It has not been restyled to this spec.
