<script setup lang="ts">
const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h1)),
);
</script>

<template>
  <h1 :id class="max-w-fit text-h1">
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
