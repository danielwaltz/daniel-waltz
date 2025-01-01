<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<{
  to: NuxtLinkProps["to"];
  title: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLink :to :aria-label="title" rel="noopener noreferrer" class="flex">
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
