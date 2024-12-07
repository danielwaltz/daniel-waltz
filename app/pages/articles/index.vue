<script setup lang="ts">
useHead({ title: "Articles" });

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
        title: doc.title,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        description: doc.description,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
        <div
          v-for="article in articles"
          :key="article._path"
          class="flex flex-col gap-6"
        >
          <article>
            <p class="m-be--2 m-is-1 text-neutral-400 font-script text-p">
              <time :datetime="article.date">
                {{ article.date }}
              </time>
            </p>

            <div class="app-prose">
              <h2 class="m-0 max-w-fit text-h3">
                <NuxtLink
                  :to="article._path"
                  class="text-primary-gradient no-underline"
                >
                  {{ article.title }}
                </NuxtLink>
              </h2>

              <p>{{ article.description }}</p>
            </div>
          </article>

          <NuxtLink
            :to="article._path"
            class="max-w-fit flex items-center gap-1 text-primary-gradient font-semibold tracking-wide uppercase text-p"
          >
            <span>Read more</span>
            <i class="i-lucide-chevron-right text-1.25em text-secondary" />
          </NuxtLink>
        </div>
      </template>

      <template v-else>
        <p class="text-p">Sorry, no articles were found.</p>
      </template>
    </div>
  </div>
</template>
