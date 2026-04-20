<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<NuxtLinkProps & { label: string; icon: string }>();
</script>

<template>
  <NuxtLink v-bind="$props" :aria-label="label" class="flex relative">
    <span class="inset--1 absolute" />
    <i :class="icon" />
    <span class="sr-only">{{ label }}</span>
  </NuxtLink>
</template>
