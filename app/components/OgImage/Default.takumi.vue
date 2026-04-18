<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  date?: string;
}>();

const site = useSiteConfig();
</script>

<template>
  <div
    class="text-neutral-100 p-16 bg-neutral flex flex-col gap-6 size-full text-pretty antialiased"
  >
    <div class="flex gap-6 items-center">
      <img src="@/assets/icons/logo.svg" alt="" class="size-14" />

      <div
        class="text-2xl text-neutral-400 font-mono font-semibold flex gap-2 items-center"
      >
        {{ site.name }} · {{ site.jobTitle }}
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <div class="flex flex-col">
        <span
          v-if="date"
          class="text-p text-neutral-400 leading-none font-script"
        >
          {{ new Date(date).toLocaleDateString("en", { dateStyle: "long" }) }}
        </span>

        <h1 v-if="title" class="text-h1 font-display truncate">
          {{ title }}
        </h1>
      </div>

      <p v-if="description" class="text-p font-serif">
        {{ description }}
      </p>
    </div>

    <div
      class="h-32 inset-x-0 inset-be-0 absolute from-transparent to-neutral to-50% bg-linear-to-b"
    />
  </div>
</template>
