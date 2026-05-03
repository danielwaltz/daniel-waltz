<template>
  <AnimatePresence mode="popLayout" :initial="false">
    <NuxtPage>
      <template #default="{ Component }">
        <Motion v-bind="pageMotion">
          <component :is="Component" />
        </Motion>
      </template>
    </NuxtPage>
  </AnimatePresence>
</template>
