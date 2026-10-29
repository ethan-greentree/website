# Writing articles

The version-controlled blank template is [templates/article.md](templates/article.md).

1. Copy the template into your Obsidian vault's Templates folder. Enable Obsidian's core Templates plugin and select that folder in its settings.
2. Create a note and insert the template. Obsidian fills in `{{date:YYYY-MM-DD}}` with today's date. Edit the title and publication date as needed. Keep both values quoted and leave `layout` unchanged. `summary` is optional; see [Summaries, link previews and RSS](#summaries-link-previews-and-rss).
3. Write in standard Markdown. The layout supplies the title as the page's heading, so begin body sections with `##`.
4. Copy the finished note directly into `src/pages/blog/`, for example `src/pages/blog/learning-about-dns.md`. Use lowercase filenames with hyphens. Do not use `index.md`, which would collide with the Articles index. Keep files directly in this folder so the template's layout path stays correct.
5. Run `npm run dev` to preview `/blog/learning-about-dns/` and the Articles listing. Run `npm run build` before committing. The next deployment publishes the article.

Every `.md` file in `src/pages/blog/` is a published article and appears on both the homepage and Articles index, newest date first. Keep drafts and the blank template outside that directory. Dates are publication labels; future dates do not schedule publication. Renaming a file changes its URL and requires updating links to it.

## Summaries, link previews and RSS

Each article's summary is used as its page description, its link preview text (for example on LinkedIn), and its entry in the RSS feed at `/rss.xml`. By default the summary is the article's first published paragraph, shortened to about 200 characters. HTML comments, such as a working outline, are skipped. To write a summary yourself, fill in the quoted `summary` field; leave it as `""` or remove it to use the first paragraph.

Every published article appears in `/rss.xml`, newest first. All pages share one preview image, `public/og-image.png` (1200×630). Its source is [assets/og-image.svg](assets/og-image.svg). To change it, edit the SVG, open it in Chrome at a 1200×630 window size, and save a screenshot over the PNG.

To use the template without Obsidian's Templates plugin, replace the date placeholder manually with a quoted date such as `"2026-10-12"`.

Reference: [Obsidian's Templates documentation](https://obsidian.md/help/plugins/templates) describes the date placeholder. [Astro's Markdown page documentation](https://docs.astro.build/en/basics/astro-pages/#markdownmd-pages) describes file-based routes and the layout field.

## Links and images

Use standard Markdown links with the destination article's website URL:

```md
[Learning about DNS](/blog/learning-about-dns/)
[A section in that article](/blog/learning-about-dns/#first-section)
[An external reference](https://example.com/)
```

Website links beginning with `/blog/` are intended for the site preview; they may not navigate between notes inside Obsidian. Obsidian `[[wikilinks]]` and `![[embeds]]` are not supported. Use ordinary Markdown instead.

For images, copy the image to `public/images/articles/` and reference it with descriptive alt text, for example `![DNS lookup diagram](/images/articles/dns-lookup.png)`. Vault attachments are not copied automatically. Avoid private vault links or notes in the finished file.
