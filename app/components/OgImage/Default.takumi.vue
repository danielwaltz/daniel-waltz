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
    <AppBackdrop class="absolute" />

    <div class="flex gap-6 items-center">
      <Icon name="app:logo" mode="svg" class="size-12" />

      <div class="text-xl text-neutral-400 font-mono">
        {{ site.name }} {{ site.separator }} {{ site.jobTitle }}
      </div>
    </div>

    <div class="flex flex-col gap-10">
      <div class="flex flex-col">
        <span
          v-if="formattedDate"
          class="heading-intro font-script mbe--0.75em"
        >
          {{ formattedDate }}
        </span>

        <h1
          v-if="title"
          class="text-h1 leading-1.25em font-display truncate self-start"
        >
          {{ title }}
        </h1>
      </div>

      <p v-if="description" class="text-p font-serif">
        {{ description }}
      </p>
    </div>

    <div
      class="h-48 inset-x-0 inset-be-0 absolute from-neutral from-25% bg-linear-to-t"
    />
  </div>
</template>
