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
  link: [{ rel: 'icon', type: 'image/svg+xml', href: meta.icon }],
  meta: [
    { name: 'description', content: meta.description },
    { name: 'theme-color', content: '#121212' },
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
</script>

<template>
  <div class="grid h-viewport place-items-center">
    <main class="max-w-2xl w-full flex flex-col gap-8 p-8">
      <h1 class="flex flex-col items-start">
        <span class="m-be--2 rotate--3deg text-2xl font-script sm:text-3xl"
          >Hi, I'm</span
        >
        <span
          class="text-gradient-primary text-6xl font-display uppercase sm:text-8xl"
          >Daniel Waltz</span
        >
      </h1>

      <p class="text-lg lh-8 sm:text-2xl sm:lh-10">
        I'm a
        <span class="text-gradient-primary font-700 uppercase"
          >UI Engineer</span
        >
        with a <strong>passion</strong> for delivering the most usable,
        accessible, and beautiful interfaces <em>imaginable</em>. Together we
        can make the web a better place for <strong>everyone</strong>!
      </p>

      <nav
        class="flex flex-wrap items-center self-start gap-6 text-3xl sm:text-4xl"
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
    </main>
  </div>

  <AppIconLink
    href="https://github.com/danielwaltz/daniel-waltz"
    title="View Source Code"
    icon="i-mdi-code-tags"
    class="fixed right-3 top-3 text-xl text-foreground/60 hover:text-foreground"
  />
</template>
