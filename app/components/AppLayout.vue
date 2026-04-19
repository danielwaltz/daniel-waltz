<script setup lang="ts">
import { cleanDoubleSlashes } from "ufo";

useHead({
  bodyAttrs: {
    class:
      "[color-scheme:dark] min-h-viewport bg-neutral text-neutral-100 font-sans antialiased accent-primary",
  },
});

const route = useRoute();
const site = useSiteConfig();

const title = toRef(() => route.meta.title);
const description = toRef(() => route.meta.description);
const url = toRef(() => cleanDoubleSlashes(`${site.url}${route.path}`));

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogUrl: url,
  themeColor: "#000000",
});

defineOgImage("Default", { title, description });
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
