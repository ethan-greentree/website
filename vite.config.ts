import { getViteConfig } from "astro/config";
import { defineConfig } from "vite-plus";

// Vite+ settings for `vp fmt`, `vp lint`, `vp check` and `vp test`.
// Astro has its own config (astro.config.mjs) and doesn't read this file;
// run the site with `vp run dev` and `vp run build`. getViteConfig adds
// Astro's plugins so tests can import modules that load Markdown pages.

// Generated or vendored files that aren't ours to format or lint.
const ignored = [
  "dist/**",
  "public/games/**",
  "docs/research/evidence/**",
  "pnpm-lock.yaml",
];

const config = defineConfig({
  fmt: {
    // Matches the Prettier default the code was written with.
    printWidth: 80,
    ignorePatterns: ignored,
  },
  lint: {
    ignorePatterns: ignored,
    options: { typeAware: true, typeCheck: true },
  },
  test: {
    include: ["tests/**/*.test.ts"],
  },
});

// getViteConfig is typed against Astro's own copy of Vite, not Vite+'s.
export default getViteConfig(config as Parameters<typeof getViteConfig>[0]);
