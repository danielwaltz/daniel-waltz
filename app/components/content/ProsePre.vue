<script setup lang="ts">
// eslint-disable-next-line vue/define-props-declaration
defineProps({
  // eslint-disable-next-line vue/no-unused-properties
  code: {
    type: String,
    default: "",
  },
  // eslint-disable-next-line vue/no-unused-properties
  language: {
    type: String,
    default: null,
  },
  // eslint-disable-next-line vue/no-unused-properties
  filename: {
    type: String,
    default: null,
  },
  // eslint-disable-next-line vue/no-unused-properties
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  // eslint-disable-next-line vue/no-unused-properties
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <pre :class="$props.class" class="font-mono"><slot /></pre>
</template>

<!-- eslint-disable-next-line vue/enforce-style-attribute -->
<style>
pre code .line {
  display: block;
}
</style>
