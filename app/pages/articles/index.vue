<script setup lang="ts">
useHead({ title: "Articles" });

const route = useRoute();

const { data: articles } = useAsyncData(
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
        title: doc.title,
        description: doc.description,
        date: formatDate(doc.date),
      })),
  },
);
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-fit text-h1">Articles</h1>

    <div class="flex flex-col gap-8">
      <template v-if="articles">
        <div v-for="article in articles" :key="article._path">
          <article>
            <p class="m-be--2 m-is-1 text-neutral-400 font-script text-p">
              <time :datetime="article.date">
                {{ article.date }}
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

      <template v-else>
        <p class="text-p">Sorry, no articles were found.</p>
      </template>
    </div>
  </div>
</template>
