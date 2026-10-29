---
title: "This website"
summary: "My personal site: written in Markdown, built with Astro, and deployed automatically with Docker and GitHub Actions."
status: "Live"
tech:
  - "Astro"
  - "Tailwind CSS"
  - "Docker"
  - "NGINX"
  - "GitHub Actions"
image: "../../assets/projects/website.png"
imageAlt: "The ethangreentree.com homepage: a green introduction block reading Ethan Greentree, IT by trade, curious by default, above the Articles section."
order: 2
---

This site is where I share what I'm learning, from small games to the infrastructure that keeps the site running.

Articles are written in Markdown and built into static HTML with Astro. The site is packaged in a Docker image and served by NGINX.

Updating it by hand meant building the image, signing into the server, pulling the image, and restarting the container every time. Now GitHub Actions builds and deploys it whenever I push to `main`, which leaves more time for building and writing.
