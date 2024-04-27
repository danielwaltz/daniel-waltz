<script setup lang="ts">
defineProps<{
  href: string;
  title: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLink
    :href="href"
    rel="noopener noreferrer"
    class="inline-flex interactive rounded"
  >
    <i :class="icon" />
    <span class="sr-only">{{ title }}</span>
  </NuxtLink>
</template>
