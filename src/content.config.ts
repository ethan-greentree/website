import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().trim().min(1),
      summary: z.string().trim().min(1),
      status: z.enum(["Live", "Prototype", "Retired"]),
      tech: z.array(z.string().trim().min(1)).min(1),
      image: image(),
      imageAlt: z.string().trim().min(1),
      order: z.number(),
      link: z
        .object({
          label: z.string().trim().min(1),
          // Site-relative paths or https URLs only.
          href: z.string().regex(/^(\/(?!\/)|https:\/\/)/),
        })
        .optional(),
      // Adds a page-specific diagram below the description.
      diagram: z.literal("deployment").optional(),
    }),
});

export const collections = { projects };
