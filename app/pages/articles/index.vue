<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-fit h1">Articles</h1>

    <div class="flex flex-col gap-8 text-lg prose sm:text-xl">
      <ContentList :query="allPublishedArticlesQuery">
        <template #default="{ list }">
          <article v-for="article in list" :key="article._path">
            <p class="m-0 text-surface-400">
              <time :datetime="article.date">
                {{ formatDate(article.date) }}
              </time>
            </p>

            <h2 class="m-0 max-w-fit text-primary-gradient h2">
              <NuxtLink :href="article._path" class="interactive">
                {{ article.title }}
              </NuxtLink>
            </h2>

            <p>{{ article.description }}</p>

            <NuxtLink
              :href="article._path"
              class="max-w-fit interactive text-primary-gradient"
            >
              Read more &rarr;
            </NuxtLink>
          </article>
        </template>

        <template #not-found>
          <p>No articles found</p>
        </template>
      </ContentList>
    </div>
  </div>
</template>
