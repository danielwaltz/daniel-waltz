<script setup lang="ts">
const route = useRoute();

const title = toRef(() => route.meta.title);
const description = toRef(() => route.meta.description);

useSeoMeta({ title, description, ogTitle: title });

defineOgImage("Default", { title, description });
</script>

<template>
  <TooltipProvider disable-hoverable-content>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </TooltipProvider>

  <AppLoadingIndicator />
  <NuxtRouteAnnouncer />
</template>
