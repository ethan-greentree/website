export interface ArticleFrontmatter {
  title: string;
  date: string;
}

export function articleDate(date: string): string {
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
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
