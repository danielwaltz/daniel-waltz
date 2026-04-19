<script setup lang="ts">
definePageMeta({
  title: "Articles",
  description: "A collection of articles written by me.",
  icon: "i-lucide-file-text",
});

const route = useRoute();

const { data: articles } = await useAsyncData(route.path, () =>
  queryCollection("articles")
    .select("title", "description", "date", "path")
    .where("status", "=", "published")
    .order("date", "DESC")
    .all(),
);
</script>

<template>
  <AppMain class="flex flex-col gap-8">
    <h1 class="text-h1 max-w-fit">{{ route.meta.title }}</h1>

    <div class="flex flex-col gap-8">
      <template v-if="articles?.length">
        <article v-for="article in articles" :key="article.path">
          <p class="text-p text-neutral-400 leading-none font-script m-is-1">
            <AppTime :datetime="article.date" date-style="long" />
          </p>

          <div class="flex flex-col gap-4">
            <h2 class="text-h3 text-primary-gradient max-w-fit">
              <NuxtLink :to="article.path" class="no-underline">
                {{ article.title }}
              </NuxtLink>
            </h2>

            <p class="text-p">{{ article.description }}</p>
          </div>

          <NuxtLink
            :to="article.path"
            class="text-p text-primary-gradient tracking-wide font-semibold mbs-4 flex gap-1 max-w-fit uppercase items-center"
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
  </AppMain>
</template>
