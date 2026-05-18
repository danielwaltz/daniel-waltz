<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLink :aria-label="label" class="flex relative">
    <span class="inset--1 absolute" />
    <Icon :name="icon" />
    <span class="sr-only">{{ label }}</span>
  </NuxtLink>
</template>
