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
  - "Vite+"
image: "../../assets/projects/website.png"
imageAlt: "The ethangreentree.com homepage: a green introduction block reading Ethan Greentree, IT by trade, curious by default, above the Articles section."
order: 2
diagram: "deployment"
---

This site is where I share what I'm learning, from small games to the infrastructure that keeps the site running.

Articles are written in Markdown and built into static HTML with Astro. The site is packaged in a Docker image and served by NGINX.

Updating it by hand meant building the image, signing into the server, pulling the image, and restarting the container every time. Now GitHub Actions builds and deploys it whenever I push to `main`, which leaves more time for building and writing.

## Security

Every build is scanned for known vulnerabilities before it's published, and a critical issue with a fix available stops the deploy. The first scan caught one in the web server's base image straight away. Every page also sends security headers, including a Content Security Policy that only allows the site's own scripts and styles.

Results on 8 November 2026:

- **[Mozilla Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=ethangreentree.com):** A+, scoring 130 with all 12 tests passed.
- **[SSL Labs](https://www.ssllabs.com/ssltest/analyze.html?d=ethangreentree.com):** A+, with only TLS 1.2 and 1.3 enabled.

Accessibility and performance results are on the [accessibility page](/accessibility/).
