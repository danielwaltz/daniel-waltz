<script setup lang="ts">
definePageMeta({
  title: "Article",
  description: "An article I've written.",
  icon: "i-lucide-file-text",
});

const route = useRoute();

const { data: article } = await useAsyncData(route.path, () =>
  queryCollection("articles")
    .select("title", "description", "date", "discussion", "body")
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
        class="text-p text-neutral-400 leading-none font-script m-be--1 m-is-1"
      >
        <AppTime :datetime="article.date" />
      </p>

      <ContentRenderer :value="article" class="app-prose" />

      <footer class="mbs-6 flex flex-wrap gap-4 items-center justify-between">
        <NuxtLink
          :to="{ name: 'articles' }"
          class="text-p text-primary-gradient tracking-wide font-semibold flex gap-1 max-w-fit uppercase items-center"
        >
          <i class="i-lucide-chevron-left text-1.25em text-primary" />
          <span>Back to articles</span>
        </NuxtLink>

        <NuxtLink
          v-if="article.discussion"
          :to="article.discussion"
          target="_blank"
          class="text-p text-primary-gradient tracking-wide font-semibold flex gap-2 max-w-fit uppercase items-center"
        >
          <span>Discussion</span>
          <i class="i-lucide-external-link text-secondary" />
        </NuxtLink>
      </footer>
    </article>
  </AppMain>
</template>
