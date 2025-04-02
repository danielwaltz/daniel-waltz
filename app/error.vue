<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const title = computed(() => `Error ${props.error.statusCode}`);

const errorMessage = toRef(() => props.error.message);
const fallbackMessage = "An unknown error occurred";
const message = toRef(() => errorMessage.value || fallbackMessage);

useSeoMeta({ title });
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-4">
      <div class="app-prose">
        <h1 class="max-w-fit text-h1">{{ title }}</h1>
        <p>{{ message }}</p>
      </div>

      <NuxtLink
        :to="{ name: 'index' }"
        class="max-w-fit flex items-center gap-1 text-primary-gradient font-semibold tracking-wide uppercase text-p"
      >
        <i class="i-lucide-chevron-left text-1.25em text-primary" />
        <span>Back to home</span>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
