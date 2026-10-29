---
layout: ../../layouts/ArticleLayout.astro
title: "What I've learned directing AI"
date: "2026-10-28"
summary: ""
---

While using AI, I have found some methods help me get more out of my agents and conversations with AI. One of the best so far is getting interviewed by the AI and creating documents from it to inform the next step(s). Through working on [Yahtz](/projects/yahtz/) and [this website](/projects/website/), I've found some strategies on getting decent results!

## What works

### Give it the whole picture

Start with an interview! Being clear from the start both in design and function before any code is written helps an agent a ton! Agents assume things along the way, or discover issues while it's working. By having an interview first, these decisions are thought about and addressed.

With Yahtz, the questions that mattered most were about rules. Specifically for the jokers and events. This helped on implementing ideas for the difference between a joker and an event and what kind of effects they imbued on the play area.

### Write decisions down

On this website, every decision goes into a GitHub issue before any work starts. That turned out to be the project's memory. When a task had many steps, or several AI helpers were working on separate pieces at once, the issue kept everyone (me included) pointed the same way.

### Look at the result yourself

Reviews catch a lot, but some things only show up when you look. Especially when it comes to design, as occasionally certain items sit awkwardly on the site or are not placed where I want them.

## What doesn't

### Complexity

I've found AI likes to over-build by default. Without proper context or skills, simple problems can balloon into large scripts with poor structure or reason.

When working on large pieces of work, I've found it hard to review it properly. A long list of changes is easy to skim and approve without really checking but breaking work into smaller issues (tasks) turns it into something I can review and understand.

## What I'd do differently

Start smaller from day one. Nearly every problem I've hit, such as over-building or hard-to-review code, was solved when the pieces got smaller. Small asks are easier to explain, easier to check, and easier to fix.

AI makes it quicker to build things, but the deciding is still my job and that's where the real problems and work gets done!
