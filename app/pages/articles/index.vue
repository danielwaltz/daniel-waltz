<script setup lang="ts">
const meta = {
  title: "Articles",
  description: "A collection of articles written by me.",
} as const;

useSeoMeta({
  title: meta.title,
  description: meta.description,
  ogTitle: meta.title,
  ogDescription: meta.description,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
});

const route = useRoute();

const { data: articles } = await useAsyncData(
  "articles",
  () =>
    queryContent(route.path)
      .where({ status: "published" })
      .sort({ date: -1 })
      .find(),
  {
    watch: [() => route.path],
    transform: (docs) =>
      docs.map((doc) => ({
        ...doc,
        ...v.parse(ArticleMetaSchema, doc),
      })),
  },
);
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-fit text-h1">Articles</h1>

    <div class="flex flex-col gap-8">
      <template v-if="articles?.length">
        <article v-for="article in articles" :key="article._path">
          <p class="m-be--2 m-is-1 text-neutral-400 font-script text-p">
            <time :datetime="article.date">
              {{ formatDate(article.date) }}
            </time>
          </p>

          <div class="app-prose">
            <h2 class="m-0 max-w-fit text-primary-gradient text-h3">
              <NuxtLink :to="article._path" class="no-underline">
                {{ article.title }}
              </NuxtLink>
            </h2>

            <p>{{ article.description }}</p>
          </div>

          <NuxtLink
            :to="article._path"
            class="mbs-4 max-w-fit flex items-center gap-1 text-primary-gradient font-semibold tracking-wide uppercase text-p"
          >
            <span>Read more</span>
            <i class="i-lucide-chevron-right text-1.25em text-secondary" />
          </NuxtLink>
        </article>
      </template>

      <div v-else class="app-prose">
        <p>Sorry, no articles were found.</p>
      </div>
    </div>
  </div>
</template>
