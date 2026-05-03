<script setup lang="ts">
definePageMeta({
  title: "Article",
  description: "An article I've written.",
  icon: "lucide:book-text",
});

const route = useRoute();

const { data: article } = useArticleQuery(route.path);

const prefetchArticles = useArticlesPrefetch();

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
      <p class="heading-intro mbe--0.75em mis-0.25em">
        <AppTime :datetime="article.date" />
      </p>

      <ContentRenderer :value="article" class="app-prose" />

      <footer class="mbs-6 flex flex-wrap gap-4 items-center justify-between">
        <NuxtLink
          :to="{ name: 'articles' }"
          class="text-p app-link-gradient app-link"
          @focusin="prefetchArticles"
          @mouseover="prefetchArticles"
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
