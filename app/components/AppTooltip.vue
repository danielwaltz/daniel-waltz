<script setup lang="ts">
import {
  useForwardPropsEmits,
  type TooltipContentProps,
  type TooltipRootEmits,
  type TooltipRootProps,
} from "reka-ui";

interface AppTooltipProps {
  content: string;
  side?: TooltipContentProps["side"];
}

const props = defineProps<TooltipRootProps & AppTooltipProps>();
const emit = defineEmits<TooltipRootEmits>();

const forward = useForwardPropsEmits(props, emit);
</script>

<template>
  <TooltipRoot v-bind="forward">
    <TooltipTrigger as-child>
      <slot />
    </TooltipTrigger>

    <TooltipContent
      :side
      :side-offset="4"
      :collision-padding="4"
      aria-hidden="true"
      class="animate-fade-in animate-duration-100 select-none rounded-md bg-neutral-800 p-2 text-sm text-neutral-100 leading-none shadow-sm"
    >
      {{ content }}
      <TooltipArrow :width="12" :height="6" class="fill-neutral-800" />
    </TooltipContent>
  </TooltipRoot>
</template>
