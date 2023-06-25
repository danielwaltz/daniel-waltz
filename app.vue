<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: {
    class:
      'grid h-100dvh min-h-100% place-items-center bg-zinc-900 font-sans text-zinc-100',
  },
  title: 'Daniel Waltz - UI Engineer',
});
</script>

<template>
  <main class="max-w-2xl flex flex-col gap-8 p-8">
    <h1 class="font-heading text-6xl font-400 md:text-8xl sm:text-7xl">
      <span class="inline-block translate-y-2 rotate--3deg font-script text-3xl"
        >Hi, I'm</span
      >
      <span class="block text-primary-gradient uppercase">Daniel Waltz</span>
    </h1>

    <p class="text-xl md:text-2xl">
      I'm a
      <span class="text-primary-gradient font-700 uppercase">UI Engineer</span>
      with a <strong>passion</strong> for delivering the most usable,
      accessible, and beautiful interfaces <em>imaginable</em>. Together we can
      make the web a better place for <strong>everyone</strong>!
    </p>

    <nav class="flex flex-wrap items-center self-start gap-6 text-4xl">
      <NuxtLink
        href="https://twitter.com/danielbwaltz"
        class="transition hover:text-primary"
      >
        <i class="i-mdi-twitter" />
        <span class="sr-only">Twitter</span>
      </NuxtLink>

      <NuxtLink
        href="https://www.linkedin.com/in/danielbwaltz"
        class="transition hover:text-primary"
      >
        <i class="i-mdi-linkedin" />
        <span class="sr-only">LinkedIn</span>
      </NuxtLink>

      <NuxtLink
        href="https://github.com/danielwaltz"
        class="transition hover:text-primary"
      >
        <i class="i-mdi-github" />
        <span class="sr-only">GitHub</span>
      </NuxtLink>

      <NuxtLink
        href="https://gitlab.com/danielwaltz"
        class="transition hover:text-primary"
      >
        <i class="i-mdi-gitlab" />
        <span class="sr-only">GitLab</span>
      </NuxtLink>

      <NuxtLink
        href="https://bitbucket.org/danielwaltz"
        class="transition hover:text-primary"
      >
        <i class="i-mdi-bitbucket" />
        <span class="sr-only">BitBucket</span>
      </NuxtLink>
    </nav>
  </main>
</template>
