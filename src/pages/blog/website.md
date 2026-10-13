---
layout: ../../layouts/ArticleLayout.astro
title: "Making my website easier to manage"
date: "2026-10-12"
---

<!--
## Working outline

### 1. The update I did not want to make
- Open with the manual routine: build the site, push the image, sign into the server, pull the image, restart the container. Repeat for every update.
- Explain the effect: anticipating those steps stifled the desire to work on the website.
- Establish the goal: free up headspace for building and writing by automating deployment.

### 2. A small site and a chance to practise
- Briefly introduce Astro: a small, customizable stack that produces static HTML.
- Explain choosing Docker to get more experience with containers and using NGINX to serve the site.
- Keep this context short so the deployment problem stays central.

### 3. Turning the routine into a workflow
- Explain the sequence in plain language: push to main, build and publish the image, then pull it onto the server and restart the container.
- Mention previous experience dabbling with GitHub Actions and understanding YAML triggers; this was the first workflow for this system.
- Describe unfamiliar syntax and SSH terminology as the main learning hurdle.
- Use known_hosts as the concrete example: research and AI conversations helped it make sense. Avoid inventing an error or a failed deployment.

### 4. The fist pump
- Describe the excitement when the automated deployment finally worked.
- Return to the original problem: now writing an article or pushing code carries less deployment overhead.
- Close with the practical tradeoff: brief downtime is acceptable for this personal site; smoother deployment could be a future exercise.
- Emphasize practising and making it easier to keep building.

## Original draft
The original article below is preserved for comparison. This outline is an HTML comment so it does not appear on the published page.
-->

When I began hosting this site a few years ago, I found that updating it stalled my passion for updating the site. As embarrassing as it is, automating it helped me with my procrastination around it!

## Building ethangreentree.com

First, we need to cover how [this website](https://github.com/ethan-greentree/website) was made. The first challenge was choosing a small tech stack for [ethangreentree.com](https://ethangreentree.com). I wanted something small and customizable, and Astro fit that bill! I wanted to increase my exposure to Docker containers and Docker management, so I went with Docker for the packaging method.

## Astro & Docker

Because Astro can bundle into simple HTML pages, it was an easy choice to pair with NGINX to run the site. I chose Astro because it's simple and has great documentation around the site. Additionally, you can add components from frameworks like React and Vue, allowing you to experiment within the site more easily.

To automate the building of the site, an action is triggered when a push happens to `main`, automating that step for me.

## The Deployment

After the image is built, another action takes over! It signs into my host machine and deploys that to the world! I'd like to explore this in the future, as right now there is a small bit of downtime during deployments (restarting the container).

It's times like these that coding can feel like magic. I did a little fist pump when it worked the first (and second) time, and it really fuels my drive for creating on the web. Here's to more projects!
