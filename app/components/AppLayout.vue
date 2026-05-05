<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const websiteId = runtimeConfig.public.scripts.umamiAnalytics.websiteId;
const hostUrl = runtimeConfig.public.scripts.umamiAnalytics.hostUrl;

if (websiteId) {
  useScriptUmamiAnalytics({ websiteId, hostUrl });
}

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
