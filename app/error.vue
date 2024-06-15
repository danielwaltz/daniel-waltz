<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => `Error ${props.error.statusCode}`);
const message = toRef(() => props.error?.message ?? '');

useHead({ title });
</script>

<template>
  <NuxtLayout>
    <article class="flex flex-col gap-3 text-pretty">
      <h1
        class="max-w-fit text-primary-gradient text-6xl font-bold font-display uppercase 2xl:text-9xl sm:text-8xl"
      >
        {{ title }}
      </h1>

      <p
        v-if="message"
        class="text-lg 2xl:text-3xl sm:text-2xl !leading-relaxed"
      >
        {{ message }}
      </p>
    </article>

    <NuxtLink
      href="/"
      class="interactive rounded-lg bg-primary px-4 py-2 text-xl text-surface font-semibold active:bg-primary-500 focus:bg-primary-400 hover:bg-primary-400"
    >
      Try Again
    </NuxtLink>
  </NuxtLayout>
</template>
