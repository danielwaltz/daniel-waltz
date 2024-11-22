<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<{
  to: NuxtLinkProps["to"];
  title: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLink :to :title rel="noopener noreferrer" class="inline-flex">
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
