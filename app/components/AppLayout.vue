<script setup lang="ts">
defineSlots<{ default: () => unknown }>();

useHead({
  bodyAttrs: {
    class:
      "text-neutral-100 font-sans accent-primary bg-neutral color-scheme-dark min-h-viewport text-pretty antialiased",
  },
});

useSeoMeta({ themeColor: "#000000" });
</script>

<template>
  <div class="min-h-viewport">
    <TooltipProvider disable-hoverable-content>
      <slot />
    </TooltipProvider>

    <AppLoadingIndicator />
    <NuxtRouteAnnouncer />
  </div>
</template>
