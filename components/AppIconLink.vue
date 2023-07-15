<script setup lang="ts">
defineProps<{
  href: string;
  title: string;
  icon: string;
}>();
</script>

<template>
  <a
    :href="href"
    :title="title"
    rel="noopener noreferrer"
    class="inline-flex interactive rounded"
  >
    <i :class="icon" />
  </a>
</template>
