<script setup lang="ts">
definePageMeta({
  title: "Article",
  description: "An article I've written.",
  icon: "lucide:book-text",
});

const route = useRoute();

const { data: article } = await useAsyncData(route.path, () =>
  queryCollection("articles")
    .select("path", "title", "description", "date", "discussion", "body")
    .where("status", "=", "published")
    .andWhere((query) => query.where("path", "=", route.path))
    .first(),
);

if (!article.value) {
  throw createError({
    status: 404,
    statusText: "The article you are looking for does not exist. 🥺",
    fatal: true,
  });
}

const ArticleH1 = defineComponent((props, { slots }) => {
  return () =>
    h(
      "h1",
      { ...props, ...getArticleViewTransitionProps(article.value!, "title") },
      slots.default?.(),
    );
});

const title = toRef(() => article.value?.title);
const description = toRef(() => article.value?.description);
const date = toRef(() => article.value?.date);

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogType: "article",
  articlePublishedTime: date,
});

defineOgImage("Default", { title, description, date });
</script>

<template>
  <AppMain class="flex flex-col gap-6">
    <article v-if="article">
      <p
        class="heading-intro mbe--0.75em mis-0.25em"
        v-bind="getArticleViewTransitionProps(article, 'date')"
      >
        <AppTime :datetime="article.date" />
      </p>

      <ContentRenderer
        :value="article"
        :components="{ h1: ArticleH1 }"
        class="app-prose"
      />

      <footer class="mbs-6 flex flex-wrap gap-4 items-center justify-between">
        <NuxtLink
          :to="{ name: 'articles' }"
          class="text-p app-link-gradient app-link"
        >
          <Icon name="lucide:arrow-big-left" class="app-link-icon" />
          <span>Back to articles</span>
        </NuxtLink>

        <NuxtLink
          v-if="article.discussion"
          :to="article.discussion"
          target="_blank"
          class="text-p app-link-gradient app-link"
        >
          <span>Discussion</span>
          <Icon name="lucide:external-link" class="app-link-icon" />
        </NuxtLink>
      </footer>
    </article>
  </AppMain>
</template>
