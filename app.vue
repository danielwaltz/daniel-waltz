<script setup lang="ts">
const meta = {
  title: 'Daniel Waltz - UI Engineer',
  url: 'https://danielwaltz.me',
  icon: '/favicon.svg',
  description:
    'UI Engineer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!',
} as const;

useServerHead({
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
  bodyAttrs: { class: 'h-viewport bg-viewport font-sans text-foreground' },
});

useServerSeoMeta({
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogImage: meta.icon,
  ogUrl: meta.url,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.icon,
  twitterCard: 'summary',
});

const { data: activity } = await useFetch('/api/activity');
</script>

<template>
  <div class="grid h-viewport place-items-center">
    <main
      class="max-w-2xl w-full flex flex-col items-start gap-8 p-8 2xl:max-w-4xl sm:max-w-3xl"
    >
      <div class="relative mbe-2 flex">
        <div class="shadow-box animate-alternate-reverse shadow-primary/75" />
        <div class="shadow-box animate-alternate shadow-secondary/75" />
        <img
          :src="meta.icon"
          alt=""
          width="96"
          height="96"
          class="relative w-18 2xl:w-32 sm:w-24"
        />
      </div>

      <h1 class="flex flex-col items-start">
        <span
          class="mbe--2 mis-1 rotate--3deg text-2xl tracking-wide font-script 2xl:text-4xl sm:text-3xl"
          >Hi, I'm</span
        >
        <span
          class="text-gradient-primary text-6xl font-display uppercase 2xl:text-9xl sm:text-8xl"
          >Daniel Waltz</span
        >
      </h1>

      <p class="text-lg 2xl:text-3xl sm:text-2xl leading-relaxed!">
        I'm a
        <strong class="uppercase">UI Engineer</strong>
        with a passion for delivering the most <strong>usable</strong>,
        <strong>accessible</strong>, and <strong>beautiful</strong> interfaces
        <em>imaginable</em>. Together we can make the web a better place for
        <span class="text-gradient-primary font-700">everyone!</span>
      </p>

      <nav
        class="flex flex-wrap items-center self-start gap-6 text-3xl 2xl:text-5xl sm:text-4xl"
      >
        <AppIconLink
          href="https://twitter.com/danielbwaltz"
          title="Twitter"
          icon="i-mdi-twitter"
          class="hover:text-primary"
        />

        <AppIconLink
          href="https://www.linkedin.com/in/danielbwaltz"
          title="LinkedIn"
          icon="i-mdi-linkedin"
          class="hover:text-primary"
        />

        <AppIconLink
          href="https://github.com/danielwaltz"
          title="GitHub"
          icon="i-mdi-github"
          class="hover:text-primary"
        />

        <AppIconLink
          href="https://gitlab.com/danielwaltz"
          title="GitLab"
          icon="i-mdi-gitlab"
          class="hover:text-primary"
        />

        <AppIconLink
          href="https://bitbucket.org/danielwaltz"
          title="BitBucket"
          icon="i-mdi-bitbucket"
          class="hover:text-primary"
        />
      </nav>

      <div
        v-if="activity"
        class="animate-flip-in-x animate-delay-10s animate-backwards text-sm text-foreground/50 2xl:text-lg sm:text-base"
      >
        Thanks for your attention! Oh, and while I have you, here's a friendly
        reminder to be kind to yourself. Why not
        {{ activity.name.toLocaleLowerCase() }}? {{ activity.emoji }}
      </div>
    </main>
  </div>

  <AppIconLink
    href="https://github.com/danielwaltz/daniel-waltz"
    title="View Source Code"
    icon="i-mdi-code-tags"
    class="absolute right-3 top-3 text-xl text-foreground/60 hover:text-foreground"
  />
</template>
