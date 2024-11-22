<script setup lang="ts">
// eslint-disable-next-line vue/define-props-declaration
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink :href :target class="text-primary">
    <slot />
  </NuxtLink>
</template>
