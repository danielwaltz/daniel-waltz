<script setup lang="ts">
defineProps<{
  title?: string;
  titleClass?: string;
  intro?: string;
  introClass?: string;
}>();
</script>

<template>
  <header class="flex flex-col items-start self-start">
    <span
      v-if="intro || $slots.intro"
      aria-hidden="true"
      class="heading-intro mbe--0.75em mis-0.25em"
      :class="introClass"
    >
      <slot name="intro">{{ intro }}</slot>
    </span>

    <h1 class="text-h1" :class="titleClass">
      <slot>{{ title }}</slot>
    </h1>
  </header>
</template>
