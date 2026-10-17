<script setup lang="ts">
import type { NuxtTimeProps } from "nuxt/app";

defineProps<NuxtTimeProps>();

const site = useSiteConfig();
</script>

<template>
  <NuxtTime v-bind="$props" :locale="site.defaultLocale" date-style="long" />
</template>
