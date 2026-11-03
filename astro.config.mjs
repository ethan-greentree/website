// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ethangreentree.com',
  integrations: [sitemap()],
  // Screenshots are committed at web-ready sizes; this avoids a native image dependency.
  image: { service: passthroughImageService() },
  // Writes a per-page CSP meta tag with hashes for inline scripts and styles.
  // Frame, form and base rules need a header and live in docker/security-headers.conf.
  // Shiki colours code with inline style attributes, which the CSP blocks;
  // code blocks use the site's own .article-body pre styles instead.
  markdown: { syntaxHighlight: false },
  security: {
    csp: {
      directives: ["default-src 'self'", "img-src 'self' data:"],
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
