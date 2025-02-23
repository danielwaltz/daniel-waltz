<script setup lang="ts">
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

const url = toRef(() => `${SITE_META.url}${route.path}`);

useSeoMeta({
  titleTemplate: (title) =>
    title ? `${title} - Daniel Waltz` : SITE_META.title,
  themeColor: "#0e0e0e",
  description: SITE_META.description,
  ogTitle: SITE_META.title,
  ogDescription: SITE_META.description,
  ogImage: SITE_META.image,
  ogUrl: url,
  twitterTitle: SITE_META.title,
  twitterDescription: SITE_META.description,
  twitterImage: SITE_META.image,
  twitterCard: "summary",
});
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
