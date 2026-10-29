import type { MarkdownInstance } from "astro";

export interface ArticleFrontmatter {
  title: string;
  date: string;
  /** Optional hand-written summary; defaults to the first paragraph. */
  summary?: string;
}

/** Every published Article, newest date first. */
export function getArticles(): MarkdownInstance<ArticleFrontmatter>[] {
  return Object.values(
    import.meta.glob<MarkdownInstance<ArticleFrontmatter>>(
      "../pages/blog/*.md",
      { eager: true },
    ),
  ).sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export function parseArticleDate(date: string): Date {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== date
  ) {
    throw new Error(
      `Invalid article date "${date}". Use a quoted YYYY-MM-DD date.`,
    );
  }
  return parsed;
}

export function articleDate(date: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(parseArticleDate(date));
}

const SUMMARY_LENGTH = 200;
const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
    if (entity[0] === "#") {
      const code =
        entity[1].toLowerCase() === "x"
          ? parseInt(entity.slice(2), 16)
          : parseInt(entity.slice(1), 10);
      return code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match;
    }
    return ENTITIES[entity.toLowerCase()] ?? match;
  });
}

/**
 * Plain-text summary for previews and the feed: the frontmatter `summary`
 * when present, otherwise the first published paragraph of the rendered
 * Article, shortened at a word boundary. Falls back to the title.
 */
export function articleSummary(
  frontmatter: ArticleFrontmatter,
  html: string,
): string {
  if (typeof frontmatter.summary === "string" && frontmatter.summary.trim()) {
    return frontmatter.summary.trim();
  }
  const paragraph = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .match(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/i)?.[1];
  const text = paragraph
    ? decodeEntities(paragraph.replace(/<[^>]*>/g, ""))
        .replace(/\s+/g, " ")
        .trim()
    : "";
  if (!text) return frontmatter.title;
  if (text.length <= SUMMARY_LENGTH) return text;
  const cut = text.slice(0, SUMMARY_LENGTH + 1);
  const end = cut.lastIndexOf(" ");
  return `${cut.slice(0, end > 0 ? end : SUMMARY_LENGTH).replace(/[\s,;:.!?]+$/, "")}…`;
}
