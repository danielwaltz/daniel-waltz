import type { ArticlesCollectionItem } from "@nuxt/content";
import type { StyleValue } from "vue";

export function getArticleViewTransitionProps(
  item: Pick<ArticlesCollectionItem, "path">,
  type: string,
) {
  const slug = item.path.replaceAll("/articles/", "");

  return {
    style: {
      "view-transition-name": `${slug}-${type}`,
    } satisfies StyleValue,
  };
}
