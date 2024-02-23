<script setup lang="ts">
const meta = {
  title: 'Daniel Waltz - Web Developer',
  url: 'https://danielwaltz.me',
  icon: '/favicon.svg',
  description:
    'Web developer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!',
} as const;

useHead({
  title: meta.title,
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
      '[color-scheme:dark] min-h-viewport bg-background text-foreground font-sans accent-primary',
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
      <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />

      <h1 class="flex flex-col items-start">
        <span
          aria-hidden="true"
          class="mbe--2 mis-1 rotate--3deg text-2xl tracking-wide font-script 2xl:text-4xl sm:text-3xl"
          >Hi, I'm</span
        >
        <span
          class="text-primary-gradient text-6xl font-display uppercase 2xl:text-9xl sm:text-8xl"
          >Daniel Waltz</span
        >
      </h1>

      <p class="text-lg 2xl:text-3xl sm:text-2xl leading-relaxed!">
        I'm a
        <strong class="uppercase">web developer</strong>
        with a passion for delivering the most <strong>usable</strong>,
        <strong>accessible</strong>, and <strong>beautiful</strong> interfaces
        <em>imaginable</em>. Together we can make the web a better place for
        <span class="text-primary-gradient font-700">everyone!</span>
      </p>

      <nav aria-label="Accounts" class="self-start">
        <ul
          class="flex flex-wrap items-center gap-0.75em text-2xl 2xl:text-4xl sm:text-3xl"
        >
          <li class="inline-flex">
            <AppIconLink
              href="https://x.com/danielbwaltz"
              title="X / Twitter"
              icon="i-fa6-brands-x-twitter"
              class="focus:text-primary hover:text-primary"
            />
          </li>

          <li class="inline-flex">
            <AppIconLink
              href="https://mastodon.world/@danielwaltz"
              title="Mastodon"
              icon="i-fa6-brands-mastodon"
              class="focus:text-primary hover:text-primary"
            />
          </li>

          <li class="inline-flex">
            <AppIconLink
              href="https://www.linkedin.com/in/danielbwaltz"
              title="LinkedIn"
              icon="i-fa6-brands-linkedin"
              class="focus:text-primary hover:text-primary"
            />
          </li>

          <li class="inline-flex">
            <AppIconLink
              href="https://github.com/danielwaltz"
              title="GitHub"
              icon="i-fa6-brands-github"
              class="focus:text-primary hover:text-primary"
            />
          </li>

          <li class="inline-flex">
            <AppIconLink
              href="https://gitlab.com/danielwaltz"
              title="GitLab"
              icon="i-fa6-brands-gitlab"
              class="focus:text-primary hover:text-primary"
            />
          </li>

          <li class="inline-flex">
            <AppIconLink
              href="https://bitbucket.org/danielwaltz"
              title="BitBucket"
              icon="i-fa6-brands-bitbucket"
              class="focus:text-primary hover:text-primary"
            />
          </li>
        </ul>
      </nav>

      <div
        class="animate-flip-in-x animate-delay-10s animate-backwards text-sm text-foreground/50 2xl:text-lg sm:text-base"
      >
        Oh, and while I have you, here's a friendly reminder to be kind to
        yourself!
      </div>
    </main>
  </div>

  <AppIconLink
    href="https://github.com/danielwaltz/daniel-waltz"
    title="View Source Code"
    icon="i-mdi-code-tags"
    class="absolute right-3 top-3 text-xl text-foreground/60 focus:text-foreground hover:text-foreground"
  />
</template>
