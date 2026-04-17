<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  siteName?: string;
}>();
</script>

<template>
  <div
    class="text-neutral-100 font-sans p-12 bg-neutral flex flex-col gap-4 size-full text-pretty antialiased"
  >
    <div
      v-if="siteName"
      class="text-xl text-neutral-400 flex gap-2 items-center"
    >
      {{ siteName }}
    </div>

    <div class="flex flex-col gap-8">
      <h1 v-if="title" class="text-h1 font-display truncate">
        {{ title }}
      </h1>

      <p v-if="description" class="text-4xl font-serif">
        {{ description }}
      </p>
    </div>

    <div
      class="h-26 inset-x-0 inset-be-0 absolute from-transparent to-neutral to-75% bg-linear-to-b"
    />
  </div>
</template>
