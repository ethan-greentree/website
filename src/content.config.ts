import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().trim().min(1),
        summary: z.string().trim().min(1),
        status: z.enum(["Live", "Prototype", "Retired"]),
        tech: z.array(z.string().trim().min(1)).min(1),
        // Optional only when the diagram stands in as the visual (see below).
        image: image().optional(),
        imageAlt: z.string().trim().min(1).optional(),
        order: z.number(),
        link: z
          .object({
            label: z.string().trim().min(1),
            // Site-relative paths or https URLs only.
            href: z.string().regex(/^(\/(?!\/)|https:\/\/)/),
          })
          .optional(),
        // Adds a page-specific diagram below the description.
        diagram: z.enum(["deployment", "homelab"]).optional(),
        // Shows the project on the homepage; exactly one project sets this.
        featured: z.boolean().optional(),
      })
      .superRefine((data, ctx) => {
        if (data.image && !data.imageAlt) {
          ctx.addIssue({
            code: "custom",
            path: ["imageAlt"],
            message: "Describe the image in `imageAlt`.",
          });
        }
        // The homelab diagram can stand in for a screenshot; others can't.
        if (!data.image && data.diagram !== "homelab") {
          ctx.addIssue({
            code: "custom",
            path: ["image"],
            message: "Add a screenshot in `image` (with `imageAlt`).",
          });
        }
      }),
});

export const collections = { projects };
