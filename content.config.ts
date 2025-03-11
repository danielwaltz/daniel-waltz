import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: {
        include: "articles/**/*.md",
        repository: "https://github.com/danielwaltz/content",
      },
      type: "page",
      schema: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        date: z.string().min(1),
        status: z.enum(["draft", "published"]),
        discussion: z.string().url().optional(),
      }),
    }),
  },
});
