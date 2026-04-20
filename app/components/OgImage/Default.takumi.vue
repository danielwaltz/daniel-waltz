<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  date?: string;
}>();

const site = useSiteConfig();

const formattedDate = computed(() => {
  const _date = props.date;
  if (!_date) return null;
  const _locale = site.defaultLocale;
  return new Date(_date).toLocaleDateString(_locale, { dateStyle: "long" });
});
</script>

<template>
  <div
    class="text-neutral-100 p-16 bg-neutral flex flex-col gap-8 size-full text-pretty antialiased"
  >
    <AppBackdrop class="opacity-10 absolute" />

    <div class="flex gap-6 items-center">
      <img src="@/assets/icons/logo.svg" alt="" class="size-12" />

      <div class="text-xl text-neutral-400 font-mono">
        {{ site.name }} {{ site.separator }} {{ site.jobTitle }}
      </div>
    </div>

    <div class="flex flex-col gap-12">
      <div class="flex flex-col">
        <span
          v-if="formattedDate"
          class="text-p text-neutral-400 leading-none font-script mbe--1"
        >
          {{ formattedDate }}
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
      class="h-48 inset-x-0 inset-be-0 absolute from-transparent to-neutral to-75% bg-linear-to-b"
    />
  </div>
</template>
