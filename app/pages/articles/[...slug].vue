<script setup lang="ts">
const route = useRoute("articles-slug");

const { data: article } = await useAsyncData(
  route.path,
  () =>
    queryCollection("articles")
      .select("title", "description", "date", "discussion", "body")
      .where("status", "=", "published")
      .andWhere((query) => query.where("path", "=", route.path))
      .first(),
  { watch: [() => route.path] },
);

const title = toRef(() => article.value?.title ?? "Not Found");
const description = toRef(() => article.value?.description);
const date = toRef(() => article.value?.date);

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "article",
  articlePublishedTime: date,
  twitterTitle: title,
  twitterDescription: description,
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <article v-if="article">
      <p
        class="m-be--1 m-is-1 text-neutral-400 font-script text-p !leading-none"
      >
        <time :datetime="article.date">
          {{ formatDate(article.date) }}
        </time>
      </p>

      <ContentRenderer :value="article" class="app-prose" />

      <footer class="mbs-6 flex flex-wrap items-center justify-between gap-4">
        <NuxtLink
          :to="{ name: 'articles' }"
          class="max-w-fit flex items-center gap-1 text-primary-gradient font-semibold tracking-wide uppercase text-p"
        >
          <i class="i-lucide-chevron-left text-1.25em text-primary" />
          <span>Back to articles</span>
        </NuxtLink>

        <NuxtLink
          v-if="article.discussion"
          :to="article.discussion"
          target="_blank"
          class="max-w-fit flex items-center gap-2 text-primary-gradient font-semibold tracking-wide uppercase text-p"
        >
          <span>Discussion</span>
          <i class="i-lucide-external-link text-secondary" />
        </NuxtLink>
      </footer>
    </article>

    <div v-else class="app-prose">
      <h1 class="max-w-fit text-h1">Not Found</h1>
      <p>Sorry, the article you are looking for does not exist.</p>
      <NuxtLink
        :to="{ name: 'articles' }"
        class="max-w-fit flex items-center gap-1 text-primary-gradient font-semibold tracking-wide uppercase text-p"
      >
        <i class="i-lucide-chevron-left text-1.25em text-primary" />
        <span>Back to articles</span>
      </NuxtLink>
    </div>
  </div>
</template>
