<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const websiteId = runtimeConfig.public.scripts.umamiAnalytics.websiteId;
const hostUrl = runtimeConfig.public.scripts.umamiAnalytics.hostUrl;

if (websiteId && hostUrl) {
  useScript(
    {
      defer: true,
      src: `${hostUrl}/script.js`,
      "data-website-id": websiteId,
    },
    { trigger: "onNuxtReady" },
  );
}

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
  </div>
</template>
