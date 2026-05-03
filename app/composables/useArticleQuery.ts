export const articleQuery = defineQueryOptions((path: string) => ({
  key: ["articles", path],
  query: async () => {
    const article = await queryCollection("articles")
      .select("path", "title", "description", "date", "discussion", "body")
      .where("status", "=", "published")
      .andWhere((query) => query.where("path", "=", path))
      .first();

    if (!article) {
      throw createError({
        status: 404,
        statusText: "The article you are looking for does not exist. 🥺",
        fatal: true,
      });
    }

    return article;
  },
  staleTime: Infinity,
  gcTime: false,
}));

export function useArticleQuery(path: string) {
  return useQuery(articleQuery(path));
}

export function useArticlePrefetch() {
  const queryCache = useQueryCache();
  return (path: string) =>
    queryCache.refresh(queryCache.ensure(articleQuery(path)));
}
