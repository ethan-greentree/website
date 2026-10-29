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
  vite: {
    plugins: [tailwindcss()]
  }
});
