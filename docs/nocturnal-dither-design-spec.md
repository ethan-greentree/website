# Ethan Greentree: nocturnal dither

Status: **third design direction for exploration, not a final selection**.
Updated: 2026-10-11. Portable brief for another design tool or coding assistant.

## User's inspiration

Ethan is a huge fan of dithering, Creative Commons imagery of nights and strange or surreal objects, a predominantly black-and-white palette with red, and the dither-forward cover art associated with the dungeon synth music he enjoys.

Reference supplied: https://ca.pinterest.com/ideas/dithering-graphic-design/911998169261/

The Pinterest page could not be retrieved during this session. This brief interprets Ethan's description; it does not claim to reproduce or analyze particular pins. No image assets have been selected, licensed, downloaded, or transformed.

This is independent of [the brutalist-inspired study](brutalist-inspired-design-spec.md) and [the smooth earthy study](smooth-earthy-design-spec.md). Green, botanical branding, square cards, and sticky labels are possibilities from previous studies, not constraints on this direction.

## Concept

**A nocturnal field journal: technical curiosity presented with the atmosphere of an underground music zine.**

Let an enigmatic image set the tone. Keep the actual website readable and direct: Ethan's name, a short introduction, writing, and genuine work. A visitor can enjoy the atmosphere without solving a navigation puzzle.

The dungeon synth connection is a visual inspiration supplied by Ethan, not a claim that he makes music or wants a fantasy-themed identity. Explore mystery, negative space, coarse light and shadow, and tactile image texture. Do not automatically add castles, occult symbols, medieval roles, or invented lore.

## Visual language

- Black or near-black surfaces with bone-white text and artwork.
- White, black, and gray created through the image's dither pattern rather than smooth photographic shading alone.
- One red accent for active links, small markers, an underline, or a single graphic intervention.
- Quiet typography around intense imagery: a characterful serif heading paired with readable sans-serif body text is one option; a restrained grotesk with monospace captions is another.
- Deliberate empty space and editorial composition. Images should feel selected and placed, not spread as a tiled texture behind every paragraph.
- Thin rules, numbered captions, dates, and occasional small red marks can establish rhythm.
- Avoid automatically turning this into a glitching cyberpunk terminal. Animated static, scanlines, distorted body text, and boot sequences are not requested.

Candidate palette: near-black `#111111`, bone `#EEECE5`, subdued gray `#AAA8A2`, and signal red `#E7473C`. These are starting points, not audited tokens. Check the selected red separately on light and dark backgrounds; do not assume one red works for small text in both modes.

## Imagery direction

Search for source images with recognizable silhouettes and strong light/shadow separation. Candidate subjects, not a mandatory checklist:

- Moonlit paths, bare branches, mist, water at night, or isolated structures.
- Weathered stone, an unusual scientific specimen, a sculpture, an antique instrument, or a mysterious everyday object.
- An astronomical plate, a natural-history engraving, or a surreal crop from a historical image.

Strangeness can come from cropping and juxtaposition, without generating fictional professional evidence or borrowing album artwork. Do not assume an image is reusable because it is old, appears on Pinterest, or resembles a public-domain work.

Use one strong image near the introduction and, at most, a few supporting images in the initial study. Compare a recognizable night scene with an isolated object. Let Ethan choose the mood before building a large asset collection.

## Dither treatment

Explore two distinct image treatments:

1. **Coarse ordered dither:** a visible regular pattern and graphic, almost printed quality.
2. **Error-diffusion dither:** a less regular texture that can retain softer forms and an eerie photographic atmosphere.

These are candidate visual treatments, not claims about the technique used in Ethan's reference. Compare crops and processing at actual display sizes. A thresholded silhouette or a grain overlay is not an adequate substitute if Ethan specifically likes the dither pattern.

Adjust the source image's crop and tonal range before choosing pattern scale. Preserve enough detail to recognize the subject. Compare the same image at desktop and mobile sizes; dense patterns can become muddy or produce distracting interference after resizing.

Prepare static image assets ahead of publication for the initial site. Keep source/provenance information and the processing recipe with the assets so future images can match. A real-time canvas/shader effect is optional future experimentation, not needed to create this look. Do not animate the dither by default.

## Two compositions to compare

### A. Night journal

- Compact wordmark/name and plain navigation across the top.
- A large dithered night scene framed by generous black space.
- Ethan's name and “Professional Tinkerer” adjacent to or below the image, with a short red rule rather than a giant colored button.
- A short introduction, followed by existing curiosity/approach/about content in a calm reading column.
- Section names, dates, and captions provide editorial rhythm. Sticky labels are optional and subtle.
- Future writing entries can be text-led with small image fragments when actual posts exist.

This treatment places atmosphere first while leaving a straightforward path into the content.

### B. Strange-object index

- Bone-white page with black type, generous margins, and red annotations.
- A cutout-like dithered object sits beside the introduction, with a numbered caption.
- Asymmetric but orderly sections resemble pages in an experimental printed catalogue.
- Use an occasional black image panel for contrast, rather than enclosing all content in cards.
- Existing questions can form a short index; no fabricated project entries are required.

This treatment places the journal/catalogue structure first and lets the imagery supply the mystery.

Compare both with identical copy. They should disagree about composition and light/dark balance, not merely swap background colors.

## Content and credibility

Keep the existing homepage's voice. Starting copy:

- Name: **Ethan Greentree**.
- Main heading: **Professional Tinkerer**.
- Supporting heading: **I wanted to know how it works. So I built one.**
- Introduction: **Hey, I'm Ethan. I enjoy figuring out how things work and turning curiosity into action.**
- Curiosity: **How does this work? Why does it work that way? Can we make it easier? What happens if…?**
- Approach: **I like technology as a means rather than an end. Sometimes the answer might be Laravel, other times, it might be PowerShell. Sometimes it's a spreadsheet or diagram that outlines the process and steps to explore the problem differently.**
- About draft: **I've worked at KES for five years. I've also been tinkering on and off for a few years beyond that, and I'm taking that learning more seriously now.**
- About: **I like understanding complicated things, breaking them into pieces and assembling them into a solution for a project. I'm a firm believer in teaching as practice. If I find something interesting, I want others to know about it too!**
- Asides: **Comfortable figuring things out.** / **Happiest when something finally clicks.**

Do not turn this aesthetic into a new fictional persona or rewrite the copy into cryptic fantasy prose. Ask Ethan before adding experience, job titles, duties, projects, certifications, metrics, or contact details. Five years at KES does not establish five years of programming. Existing technology examples are not skill ratings.

## Image sourcing and credits

Use [Openverse](https://openverse.org/) as a discovery tool for openly licensed/public-domain media, then inspect the original source record. Its documentation describes the service and its media scope. [Openverse documentation](https://docs.openverse.org/), [Media overview](https://docs.openverse.org/api/reference/made_with_ov.html)

[Wikimedia Commons](https://commons.wikimedia.org/) is another source to explore. Each file has its own conditions; record the creator, title, source URL, exact license/version, and changes. A useful credit might say that the image was cropped and dithered. [Commons reuse guidance](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia)

For the simplest initial workflow, favor verified public-domain/CC0 assets or CC BY images permitting adaptation. CC BY 4.0 allows adaptation with attribution and indication of changes. CC BY-SA can also work, with its adaptation-sharing requirements addressed. Avoid choosing NoDerivatives images for a treatment that changes the artwork without separately resolving permission. [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)

The exact asset's terms govern its use. No album cover or Pinterest thumbnail is cleared by this brief. Credits can live in a small image caption or a clearly linked colophon, with enough information to identify the original and transformation.

## Reading and interaction

- Keep text as text, outside heavily patterned images.
- Use a legible body font at a comfortable size and line length; save stylized type for a few headings.
- Red highlights have accompanying text or state cues; links and keyboard focus remain identifiable.
- Decorative images should not overwhelm the introduction or make mobile visitors scroll through an entire cover before seeing who Ethan is.
- Keep images static initially. Any later motion should respect reduced-motion settings.
- Give meaningful images suitable descriptions; decorative ones need not repeat nearby copy.
- Check the dither pattern at actual sizes, narrow screens, and zoom alongside normal layout and keyboard checks.

## Prompt for another tool

> Explore a new personal homepage for Ethan Greentree inspired by dither-forward dungeon synth cover art, nocturnal photography, surreal objects, and underground editorial design. Use mostly black and bone-white with selective red accents. Build two distinct studies: a dark night journal with one strong dithered scene, and a light strange-object catalogue with an isolated dithered object. Keep the provided personal copy readable and direct, with clear navigation and comfortable article-style typography. Let imagery provide mystery; avoid invented fantasy lore, fake terminal UI, constant glitch effects, and fabricated professional claims. Use only supplied assets with verified licenses allowing the intended treatment, or clearly labeled image placeholders. Do not substitute an unlicensed album cover or Pinterest thumbnail. Show editable desktop and mobile compositions, a type/palette board, and image-treatment comparisons. Treat this as a third independent direction rather than blending it automatically with the green earthy concepts.

## Decisions for review

Choose night scene versus strange object, dark versus light base, serif versus grotesk headings, coarse versus fine dither, and where red appears. None of those choices has been finalized. The next useful artifact is a small image/contact sheet plus two compositions, not a production theme.
