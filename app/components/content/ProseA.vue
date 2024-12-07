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
      // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
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
