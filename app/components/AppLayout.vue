<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      "[color-scheme:dark] min-h-viewport bg-neutral text-neutral-100 font-sans antialiased accent-primary",
  },
});

useSeoMeta({ themeColor: "#000000" });
</script>

<template>
  <div class="min-h-viewport">
    <slot />
  </div>
</template>
