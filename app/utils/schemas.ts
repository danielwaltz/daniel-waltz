export const ArticleMetaSchema = v.object({
  title: v.string(),
  description: v.string(),
  date: v.string(),
  status: v.picklist(["draft", "published"]),
  discussion: v.pipe(v.string(), v.url()),
});
