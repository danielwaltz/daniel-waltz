<script setup lang="ts">
const route = useRoute("articles-slug");

const { data: article } = await useAsyncData(
  () => route.path,
  () =>
    queryCollection("articles")
      .select("title", "description", "date", "discussion", "body")
      .where("status", "=", "published")
      .andWhere((query) => query.where("path", "=", route.path))
      .first(),
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
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <article v-if="article">
      <p
        class="text-p text-neutral-400 font-script m-be--1 m-is-1 leading-none!"
      >
        <NuxtTime
          :datetime="article.date"
          month="long"
          day="2-digit"
          year="numeric"
        />
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

    <div v-else class="flex flex-col gap-4">
      <div class="app-prose">
        <h1>Not Found</h1>
        <p>The article you are looking for does not exist. 🥺</p>
      </div>

      <NuxtLink
        :to="{ name: 'articles' }"
        class="text-p text-primary-gradient tracking-wide font-semibold flex gap-1 max-w-fit uppercase items-center"
      >
        <i class="i-lucide-chevron-left text-1.25em text-primary" />
        <span>Back to articles</span>
      </NuxtLink>
    </div>
  </div>
</template>
