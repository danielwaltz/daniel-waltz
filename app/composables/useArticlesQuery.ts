export const articlesQuery = defineQueryOptions({
  key: ["articles"],
  query: async () => {
    const articles = await queryCollection("articles")
      .select("path", "title", "description", "date")
      .where("status", "=", "published")
      .order("date", "DESC")
      .all();

    if (!articles.length) {
      throw createError({
        status: 404,
        statusText: "No articles were found. 🥺",
        fatal: true,
      });
    }

    return articles;
  },
  staleTime: Infinity,
  gcTime: false,
});

export function useArticlesQuery() {
  return useQuery(articlesQuery);
}

export function useArticlesPrefetch() {
  const queryCache = useQueryCache();
  return () => queryCache.refresh(queryCache.ensure(articlesQuery));
}
