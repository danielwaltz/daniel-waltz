<script setup lang="ts">
import rangi from "@comark/nuxt/plugins/rangi";
import { Motion } from "motion-v";
import { nord } from "rangi/themes";

definePageMeta({
  title: "Article",
  description: "An article I've written.",
  icon: "lucide:book-text",
});

const site = useSiteConfig();
const route = useRoute();

const { data: article } = await useAsyncData(route.path, () =>
  queryCollection("articles")
    .select(
      "rawbody",
      "path",
      "title",
      "description",
      "date",
      "discussion",
      "meta",
    )
    .where("status", "=", "published")
    .andWhere((query) => query.where("path", "=", route.path))
    .first(),
);

if (!article.value) {
  throw createError({
    status: 404,
    statusText: "The article you are looking for does not exist. 🥺",
    fatal: true,
  });
}

const title = toRef(() => article.value?.title);
const description = toRef(() => article.value?.description);
const date = toRef(() => article.value?.date);
const readingTime = toRef(() => article.value?.meta.readingTime.text);

const ArticleH1 = defineComponent((props, { slots }) => {
  return () =>
    h(
      // @ts-expect-error type mismatch
      Motion,
      { as: "h1", layout: true, layoutId: article.value?.title, ...props },
      slots.default?.(),
    );
});

const components = { h1: ArticleH1 };

const plugins = [rangi({ theme: nord })];

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogType: "article",
  articlePublishedTime: date,
  articleAuthor: site.name,
  twitterLabel1: "Author",
  twitterData1: site.name,
  twitterLabel2: "Read Time",
  twitterData2: readingTime,
});

defineOgImage("Default", { title, description, date });
</script>

<template>
  <AppMain class="flex flex-col gap-6">
    <article v-if="article">
      <Motion
        layout
        :layout-id="article.date"
        class="heading-intro mbe--0.75em mis-0.25em"
      >
        <AppTime :datetime="article.date" />
      </Motion>

      <Markdown :components :plugins class="app-prose">
        {{ article.rawbody }}
      </Markdown>

      <footer
        class="mbs-6 flex flex-balance gap-4 items-center justify-between"
      >
        <NuxtLink
          :to="{ name: 'articles' }"
          class="text-p app-link-gradient app-link"
        >
          <Icon name="lucide:arrow-big-left" class="app-link-icon" />
          <span>Back to articles</span>
        </NuxtLink>

        <NuxtLink
          v-if="article.discussion"
          :to="article.discussion"
          target="_blank"
          class="text-p app-link-gradient app-link"
        >
          <span>Discussion</span>
          <Icon name="lucide:external-link" class="app-link-icon" />
        </NuxtLink>
      </footer>
    </article>
  </AppMain>
</template>
