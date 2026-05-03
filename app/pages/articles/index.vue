<script setup lang="ts">
definePageMeta({
  title: "Articles",
  description: "A collection of articles I've written.",
  icon: "lucide:book-text",
});

const route = useRoute();

const { data: articles } = useArticlesQuery();

const prefetchArticle = useArticlePrefetch();
</script>

<template>
  <AppMain class="flex flex-col gap-10">
    <AppMainHeader :title="route.meta.title" intro-class="relative">
      <template #intro
        >I
        <AppTooltip content="Rarely... 😅" side="bottom" :delay-duration="300">
          <abbr class="text-abbr">sometimes</abbr>
        </AppTooltip>
        write
      </template>
    </AppMainHeader>

    <div v-if="articles?.length" class="flex flex-col gap-10">
      <article
        v-for="article in articles"
        :key="article.path"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col">
          <Motion
            layout
            :layout-id="article.date"
            class="heading-intro mbe--0.25em"
          >
            <AppTime :datetime="article.date" date-style="long" />
          </Motion>

          <Motion as="h2" layout :layout-id="article.title" class="self-start">
            <NuxtLink
              :to="article.path"
              class="text-h3 text-primary-gradient text-a"
              @focusin="prefetchArticle(article.path)"
              @mouseover="prefetchArticle(article.path)"
            >
              {{ article.title }}
            </NuxtLink>
          </Motion>
        </div>

        <p class="text-p">{{ article.description }}</p>

        <NuxtLink
          :to="article.path"
          class="text-p app-link-gradient app-link self-start"
          @focusin="prefetchArticle(article.path)"
          @mouseover="prefetchArticle(article.path)"
        >
          <span>Read more</span>
          <Icon name="lucide:arrow-big-right" class="app-link-icon" />
        </NuxtLink>
      </article>
    </div>

    <p v-else class="text-p">No articles were found. 🥺</p>
  </AppMain>
</template>
