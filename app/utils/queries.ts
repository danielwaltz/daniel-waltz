import type { QueryBuilderParams } from "@nuxt/content";

export const allPublishedArticlesQuery = {
  path: "/articles",
  sort: [{ date: -1 }],
  where: [{ status: "published" }],
} satisfies QueryBuilderParams;
