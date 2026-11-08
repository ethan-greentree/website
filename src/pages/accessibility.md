---
layout: ../layouts/PersonalPageLayout.astro
title: "Accessibility"
heading: "How this site was tested."
eyebrow: "Accessibility and performance"
description: "A dated record of how ethangreentree.com was checked for accessibility and performance, what was found, and what wasn't covered."
updated: "2026-11-07"
staleAfterMonths: 6
---

I want this site to work for everyone who visits it, whether they use a keyboard, a screen reader, a phone or a zoomed-in screen. This page records how I checked it, what I found and what I didn't test. It describes one point in time, so it isn't a promise that every page is fully accessible.

All checks ran on 7 November 2026 against the live site, built from commit [`7233e3c`](https://github.com/ethan-greentree/website/commit/7233e3c).

## Summary

- **Automated checks found no violations.** axe ran on every page, in both themes, at desktop and phone widths.
- **Lighthouse scored 100** for performance, accessibility, best practices and SEO on every page type tested, on mobile and desktop.
- **Manual checks passed:** keyboard navigation, visible focus, contrast in both themes, zoom to 200% and 400%, and phone width.
- **Nothing material needed fixing.** The gaps in what I tested are listed under [What wasn't covered](#what-wasnt-covered).

## Automated checks

### axe

[axe-core](https://github.com/dequelabs/axe-core) 4.14.0 ran in headless Chrome 156, with the WCAG 2.0, 2.1 and 2.2 A and AA rules plus axe's best-practice rules. It checked all 14 pages, including the 404 page, in the light and dark themes at 1280px and 375px wide. It found no violations.

axe couldn't decide the contrast of the labels inside the two diagrams (deployment and homelab), because the text sits on top of SVG shapes. I measured those separately. Every label passes AA: the lowest ratio is 5.81:1 in the light theme and 7.82:1 in the dark theme, against a minimum of 4.5:1.

### Lighthouse

[Lighthouse](https://developer.chrome.com/docs/lighthouse) 12.8.2 in headless Chrome 156, one run per page and setting.

- **Mobile:** emulated 412 × 823 screen, simulated slow 4G (150 ms round trip, about 1.6 Mbps) and a 4× slower CPU.
- **Desktop:** 1350 × 940 screen, simulated fast connection (40 ms round trip, 10 Mbps), no CPU slowdown.

Every run scored 100 for performance, accessibility, best practices and SEO. The table shows how long the largest piece of content took to appear.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Homepage | 1.1 s | 0.3 s |
| Article | 1.1 s | 0.3 s |
| Project page | 1.4 s | 0.3 s |
| Projects list | 1.1 s | 0.3 s |

The article was [Making my website easier to manage](/blog/website/), and the project page was [This website](/projects/website/). Layout shift was 0.002 or less on every run. These are lab scores from single runs, so real visits on real devices and networks will vary.

## Manual checks

- **Keyboard only: passed.** I tabbed through 11 pages from the top. "Skip to content" comes first, focus follows reading order, and nothing is out of reach.
- **Visible focus: passed.** I checked every stop, with screenshots in both themes. Links and buttons get a 3px outline, and the contact cards also turn green.
- **Theme toggle: passed.** Enter and Space both switch the theme, and the button reports its state to assistive technology.
- **Page structure: passed.** I read the accessibility tree that screen readers use, on four page types. Each page has one main heading, headings in order, labelled landmarks, and named images and diagrams.
- **Contrast: passed AA in both themes,** from axe plus the measured diagram labels.
- **Zoom to 200% and 400%: passed.** At 640px and 320px wide, in both themes, nothing scrolls sideways and no content is lost.
- **Phone width: passed.** The axe and keyboard checks also ran at 375px.

## What wasn't covered

- **A real screen reader.** I inspected the accessibility tree that screen readers use, but I haven't yet listened to the site with NVDA or VoiceOver.
- **Real devices.** Phone results come from emulation, not a physical phone.
- **Yahtz.** The game is drawn on a canvas and wasn't part of this audit, so I can't yet say how well it works with a keyboard or screen reader.
- **Small diagram text on phones.** At 320px, the diagram labels are about 10px tall. They pass contrast, and each diagram has a full text description, but they're small to read.

## How to repeat it

The checks are scripts run against the live site with headless Chrome. They run axe on every page, run Lighthouse on the page types above, and tab through each page to record focus. I plan to run them again after big changes, and at least every six months.
