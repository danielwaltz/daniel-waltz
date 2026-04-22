<script setup lang="ts">
definePageMeta({
  title: "Articles",
  description: "A collection of articles I've written.",
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
    <h1 class="text-h1 self-start">{{ route.meta.title }}</h1>

    <div v-if="articles?.length" class="flex flex-col gap-8">
      <article
        v-for="article in articles"
        :key="article.path"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col">
          <p class="text-p text-neutral-400 leading-none font-script m-is-1">
            <AppTime :datetime="article.date" date-style="long" />
          </p>

          <h2 class="text-h3 text-primary-gradient self-start">
            <NuxtLink :to="article.path" class="text-a">
              {{ article.title }}
            </NuxtLink>
          </h2>
        </div>

        <p class="text-p">{{ article.description }}</p>

        <NuxtLink
          :to="article.path"
          class="text-p app-link-gradient leading-none app-link self-start"
        >
          <span>Read more</span>
          <i class="i-lucide-arrow-big-right app-link-icon" />
        </NuxtLink>
      </article>
    </div>

    <p v-else class="text-p">No articles were found. 🥺</p>
  </AppMain>
</template>
