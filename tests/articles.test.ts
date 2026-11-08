import { describe, expect, it } from "vite-plus/test";
import {
  articleDate,
  articleSummary,
  parseArticleDate,
} from "../src/lib/articles";

describe("parseArticleDate", () => {
  it("reads a YYYY-MM-DD date as midnight UTC", () => {
    expect(parseArticleDate("2026-11-07").toISOString()).toBe(
      "2026-11-07T00:00:00.000Z",
    );
  });

  it.each(["2026-02-30", "2026-13-01", "7 Nov 2026", "2026-1-7", ""])(
    "rejects %j",
    (date) => {
      expect(() => parseArticleDate(date)).toThrow(/Invalid article date/);
    },
  );
});

describe("articleDate", () => {
  it("formats the date the same way in every time zone", () => {
    expect(articleDate("2026-01-01")).toBe("January 1, 2026");
  });
});

describe("articleSummary", () => {
  const title = "An Article";

  it("prefers the frontmatter summary", () => {
    expect(
      articleSummary(
        { title, date: "2026-11-07", summary: " Hand-written. " },
        "<p>Body</p>",
      ),
    ).toBe("Hand-written.");
  });

  it("uses the first paragraph with text, without tags or entities", () => {
    const html =
      '<p><img src="x.png" alt=""></p><p>Tom &amp; <em>Jerry</em>&#39;s&nbsp;show</p>';
    expect(articleSummary({ title, date: "2026-11-07" }, html)).toBe(
      "Tom & Jerry's show",
    );
  });

  it("shortens long paragraphs at a word boundary", () => {
    const summary = articleSummary(
      { title, date: "2026-11-07" },
      `<p>${"word ".repeat(60)}</p>`,
    );
    expect(summary.length).toBeLessThanOrEqual(201);
    expect(summary.endsWith("word…")).toBe(true);
  });

  it("falls back to the title when there's no text", () => {
    expect(
      articleSummary({ title, date: "2026-11-07" }, "<!-- <p>hidden</p> -->"),
    ).toBe(title);
  });
});
