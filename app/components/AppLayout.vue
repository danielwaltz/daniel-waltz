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
      '[color-scheme:dark] min-h-viewport bg-surface text-surface-100 font-sans accent-primary',
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
  <div class="grid min-h-viewport place-items-center">
    <AppBackdrop />

    <main
      class="max-w-2xl w-full flex flex-col items-start gap-8 p-8 text-balance 2xl:max-w-4xl sm:max-w-3xl sm:p-10"
    >
      <NuxtLink
        href="/"
        class="inline-flex interactive rounded-xl transition-transform active:scale-95"
      >
        <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
        <span class="sr-only">Home</span>
      </NuxtLink>

      <slot />
    </main>

    <AppIconLink
      href="https://github.com/danielwaltz/daniel-waltz"
      title="View Source Code"
      icon="i-mdi-code-tags"
      class="absolute right-3 top-3 text-xl text-surface-100/60 focus:text-surface-100 hover:text-surface-100"
    />
  </div>
</template>
