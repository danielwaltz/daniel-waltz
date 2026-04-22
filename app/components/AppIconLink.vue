<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<{
  label: string;
  icon: string;
  to: NuxtLinkProps["to"];
  rel?: NuxtLinkProps["rel"];
}>();
</script>

<template>
  <NuxtLink :to :rel :aria-label="label" class="flex relative">
    <span class="inset--1 absolute" />
    <i :class="icon" />
    <span class="sr-only">{{ label }}</span>
  </NuxtLink>
</template>
