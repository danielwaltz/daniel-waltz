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
    class="inline-flex transition-200"
  >
    <i :class="icon" />
  </a>
</template>
