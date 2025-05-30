<script setup lang="ts">
const route = useRoute("articles");

const { data: articles } = await useAsyncData(
  () => route.path,
  () =>
    queryCollection("articles")
      .select("title", "description", "date", "path")
      .where("status", "=", "published")
      .order("date", "DESC")
      .all(),
);

const title = toRef(() => "Articles");
const description = toRef(() => "A collection of articles written by me.");

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-fit text-h1">Articles</h1>

    <div class="flex flex-col gap-8">
      <template v-if="articles?.length">
        <article v-for="article in articles" :key="article.path">
          <p class="text-neutral-400 font-script m-is-1 text-p !leading-none">
            <NuxtTime
              :datetime="article.date"
              month="long"
              day="2-digit"
              year="numeric"
            />
          </p>

          <div class="app-prose">
            <h2 class="text-primary-gradient m-0 max-w-fit text-h3">
              <NuxtLink :to="article.path" class="no-underline">
                {{ article.title }}
              </NuxtLink>
            </h2>

            <p>{{ article.description }}</p>
          </div>

          <NuxtLink
            :to="article.path"
            class="text-primary-gradient tracking-wide font-semibold mbs-4 flex gap-1 max-w-fit uppercase items-center text-p"
          >
            <span>Read more</span>
            <i class="i-lucide-chevron-right text-1.25em text-secondary" />
          </NuxtLink>
        </article>
      </template>

      <div v-else class="app-prose">
        <p>No articles were found. 🥺</p>
      </div>
    </div>
  </div>
</template>
