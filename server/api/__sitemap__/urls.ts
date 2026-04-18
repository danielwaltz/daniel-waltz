import { queryCollection } from "@nuxt/content/server";

export default defineSitemapEventHandler(async (event) => {
  const articles = await queryCollection(event, "articles")
    .select("path", "date")
    .where("status", "=", "published")
    .all();

  return articles.map((article) => {
    return asSitemapUrl({
      loc: article.path,
      lastmod: article.date,
    });
  });
});
