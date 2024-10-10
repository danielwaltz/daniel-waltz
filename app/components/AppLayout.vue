<script setup lang="ts">
const meta = {
  title: 'Daniel Waltz - Web Developer',
  url: 'https://danielwaltz.me',
  icon: '/favicon.svg',
  description:
    'Web developer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!',
} as const;

useHead({
  titleTemplate: (title) => (title ? `${title} - Daniel Waltz` : meta.title),
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  ],
  meta: [
    { name: 'description', content: meta.description },
    { name: 'theme-color', content: '#0e0e0e' },
  ],
  htmlAttrs: { lang: 'en' },
  bodyAttrs: {
    class:
      '[color-scheme:dark] min-h-viewport bg-surface text-surface-100 font-sans antialiased accent-primary',
  },
});

useSeoMeta({
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.icon,
  ogUrl: meta.url,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.icon,
  twitterCard: 'summary',
});
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
