import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { articleSummary, getArticles, parseArticleDate } from "../lib/articles";

export async function GET({ site }: APIContext) {
  if (!site)
    throw new Error("Set `site` in astro.config.mjs for the RSS feed.");
  const items = await Promise.all(
    getArticles().map(async (article) => ({
      title: article.frontmatter.title,
      // Match the built directory URL (and og:url) with a trailing slash.
      link: new URL(`${article.url ?? ""}/`.replace(/\/+$/, "/"), site).href,
      pubDate: parseArticleDate(article.frontmatter.date),
      description: articleSummary(
        article.frontmatter,
        await article.compiledContent(),
      ),
    })),
  );
  return rss({
    title: "Ethan Greentree — Articles",
    description:
      "Articles, investigations, and notes on technology from Ethan Greentree.",
    site,
    items,
    customData: "<language>en</language>",
  });
}
