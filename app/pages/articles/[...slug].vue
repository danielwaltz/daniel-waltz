<script setup lang="ts">
const route = useRoute();

const { data: article } = await useAsyncData(
  "article",
  () => queryContent(route.path).where({ status: "published" }).findOne(),
  {
    watch: [() => route.path],
    transform: (doc) => ({
      ...doc,
      ...v.parse(ArticleMetaSchema, doc),
    }),
  },
);

useContentHead(toRef(() => article.value!));

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
      <p class="m-be--2 m-is-1 text-neutral-400 font-script text-p">
        <time :datetime="article.date">
          {{ formatDate(article.date) }}
        </time>
      </p>

      <ContentRenderer :value="article" class="app-prose" />
    </article>

    <div v-else class="app-prose">
      <h1 class="max-w-fit text-h1">Not Found</h1>
      <p>Sorry, the article you are looking for does not exist.</p>
    </div>

    <NuxtLink
      :to="{ name: 'articles' }"
      class="max-w-fit flex items-center gap-1 text-primary-gradient font-semibold tracking-wide uppercase text-p"
    >
      <i class="i-lucide-chevron-left text-1.25em text-primary" />
      <span>Back to articles</span>
    </NuxtLink>
  </div>
</template>
