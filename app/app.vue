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
      <AnimatePresence mode="popLayout" :initial="false">
        <NuxtPage>
          <template #default="{ Component }">
            <Motion v-bind="pageMotion">
              <component :is="Component" />
            </Motion>
          </template>
        </NuxtPage>
      </AnimatePresence>
    </NuxtLayout>
  </TooltipProvider>

  <AppLoadingIndicator />
  <NuxtRouteAnnouncer />
</template>
