<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => `Error ${props.error.statusCode}`);
const message = toRef(() => props.error?.message ?? "");

useHead({ title });
</script>

<template>
  <NuxtLayout>
    <div>
      <article class="app-prose">
        <h1 class="max-w-fit text-h1">{{ title }}</h1>
        <p v-if="message">{{ message }}</p>
      </article>

      <NuxtLink
        :to="{ name: 'index' }"
        class="max-w-fit flex items-center text-primary-gradient font-semibold tracking-wide uppercase text-p"
      >
        <i class="i-mdi-chevron-left text-1.5em text-primary" /> Back to home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
