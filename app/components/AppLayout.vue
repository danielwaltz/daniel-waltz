<script setup lang="ts">
import { cleanDoubleSlashes } from "ufo";

useHead({
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
    { rel: "icon", href: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
  ],
  htmlAttrs: { lang: "en" },
  bodyAttrs: {
    class:
      "[color-scheme:dark] min-h-viewport bg-neutral text-neutral-100 font-sans antialiased accent-primary",
  },
});

const route = useRoute();

const site = useSiteConfig();

const name = toRef(() => site.name);
const title = toRef(() => `${name.value} - ${site.jobTitle}`);
const description = toRef(() => site.description);
const image = toRef(() => cleanDoubleSlashes(`${site.url}/favicon.png`));
const url = toRef(() => cleanDoubleSlashes(`${site.url}${route.path}`));

useSeoMeta({
  titleTemplate: (t) => (t ? `${t} - ${name.value}` : title.value),
  themeColor: "#0b0b0b",
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogSiteName: name,
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
