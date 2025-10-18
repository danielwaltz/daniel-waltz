import { defineCollection, defineContentConfig } from "@nuxt/content";
import * as v from "valibot";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: {
        include: "articles/**/*.md",
        repository: "https://github.com/danielwaltz/content",
      },
      type: "page",
      schema: v.object({
        title: v.pipe(v.string(), v.minLength(1)),
        description: v.pipe(v.string(), v.minLength(1)),
        date: v.pipe(v.string(), v.minLength(1)),
        status: v.picklist(["draft", "published"]),
        discussion: v.optional(v.pipe(v.string(), v.url())),
      }),
    }),
  },
});
