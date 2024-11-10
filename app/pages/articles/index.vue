<script setup lang="ts">
useHead({ title: "Articles" });
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-fit text-h1">Articles</h1>

    <div class="flex flex-col gap-8">
      <ContentList :query="allPublishedArticlesQuery">
        <template #default="{ list }">
          <div v-for="article in list" :key="article._path">
            <article>
              <p class="m-be--2 m-is-1 text-surface-400 font-script text-p">
                <time :datetime="article.date">
                  {{ formatDate(article.date) }}
                </time>
              </p>

              <div class="app-prose">
                <h2 class="m-0 max-w-fit text-h3">
                  <NuxtLink :to="article._path" class="text-primary-gradient">
                    {{ article.title }}
                  </NuxtLink>
                </h2>

                <p>{{ article.description }}</p>
              </div>
            </article>

            <NuxtLink
              :to="article._path"
              class="max-w-fit flex items-center text-primary-gradient font-semibold tracking-wide uppercase text-p"
            >
              Read more
              <i class="i-mdi-chevron-right text-1.5em text-secondary" />
            </NuxtLink>
          </div>
        </template>

        <template #not-found>
          <p class="text-p">Sorry, no articles were found.</p>
        </template>
      </ContentList>
    </div>
  </div>
</template>
