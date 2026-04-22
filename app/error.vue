<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const title = toRef(() => `Error ${props.error.status}`);
const description = toRef(() => props.error.message);

useSeoMeta({ title, description, ogTitle: title });

defineOgImage("Default", { title, description });
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-4">
      <div class="app-prose">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>

      <NuxtLink
        to="/"
        class="text-p app-link-gradient leading-none app-link self-start"
      >
        <i class="i-lucide-arrow-big-left app-link-icon" />
        <span>Back to home</span>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
