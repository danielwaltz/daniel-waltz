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
  meta: [{ name: 'description', content: meta.description }],
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

const [DefineSocialLinkTemplate, ReuseSocialLinkTemplate] =
  createReusableTemplate<{ link: string; name: string; icon: string }>();
</script>

<template>
  <div class="grid h-viewport place-items-center">
    <main class="max-w-2xl w-full flex flex-col gap-8 p-8">
      <h1 class="flex flex-col items-start">
        <span
          class="translate-y-2 rotate--3deg text-2xl font-script sm:text-3xl"
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

      <nav class="flex flex-wrap items-center self-start gap-6 text-4xl">
        <DefineSocialLinkTemplate v-slot="{ link, name, icon }">
          <NuxtLink :href="link" class="transition-200 hover:text-primary">
            <i :class="icon" />
            <span class="sr-only">{{ name }}</span>
          </NuxtLink>
        </DefineSocialLinkTemplate>

        <ReuseSocialLinkTemplate
          link="https://twitter.com/danielbwaltz"
          name="Twitter"
          icon="i-mdi-twitter"
        />

        <ReuseSocialLinkTemplate
          link="https://www.linkedin.com/in/danielbwaltz"
          name="LinkedIn"
          icon="i-mdi-linkedin"
        />

        <ReuseSocialLinkTemplate
          link="https://github.com/danielwaltz"
          name="GitHub"
          icon="i-mdi-github"
        />

        <ReuseSocialLinkTemplate
          link="https://gitlab.com/danielwaltz"
          name="GitLab"
          icon="i-mdi-gitlab"
        />

        <ReuseSocialLinkTemplate
          link="https://bitbucket.org/danielwaltz"
          name="BitBucket"
          icon="i-mdi-bitbucket"
        />
      </nav>
    </main>
  </div>
</template>
