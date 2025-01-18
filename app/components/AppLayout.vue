<script setup lang="ts">
const meta = {
  title: "Daniel Waltz - Web Developer",
  description:
    "Web developer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!",
  url: "https://danielwaltz.me",
  image: "https://danielwaltz.me/favicon.png",
} as const;

useHead({
  titleTemplate: (title) => (title ? `${title} - Daniel Waltz` : meta.title),
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

useSeoMeta({
  themeColor: "#0e0e0e",
  description: meta.description,
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.image,
  ogUrl: meta.url,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.image,
  twitterCard: "summary",
});
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
