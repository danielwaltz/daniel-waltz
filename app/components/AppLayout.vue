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

const title = toRef(() => site.name);
const description = toRef(() => site.description);
const url = toRef(() => cleanDoubleSlashes(`${site.url}${route.path}`));

useSeoMeta({
  titleTemplate: (t) =>
    t ? `${t} - ${site.name}` : `${site.name} - ${site.jobTitle}`,
  themeColor: "#0b0b0b",
  description,
  ogSiteName: title,
  ogUrl: url,
  twitterCard: "summary",
});

defineOgImage("Default", { title, description });
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
