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
        title: v.pipe(v.string(), v.nonEmpty()),
        description: v.pipe(v.string(), v.nonEmpty()),
        date: v.pipe(v.string(), v.nonEmpty(), v.isoDateTime()),
        status: v.picklist(["draft", "published"]),
        discussion: v.optional(v.pipe(v.string(), v.nonEmpty(), v.url())),
        meta: v.object({
          readingTime: v.object({
            text: v.pipe(v.string(), v.nonEmpty()),
            minutes: v.number(),
            time: v.number(),
            words: v.number(),
          }),
        }),
      }),
    }),
  },
});
