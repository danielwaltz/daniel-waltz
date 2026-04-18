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
const url = toRef(() => cleanDoubleSlashes(`${site.url}${route.path}`));

useSeoMeta({
  themeColor: "#0b0b0b",
  description: site.description,
  ogUrl: url,
  twitterCard: "summary",
});
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
