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

    <TooltipPortal>
      <AnimatePresence>
        <TooltipContent
          as-child
          :side
          :side-offset="4"
          :collision-padding="4"
          aria-hidden="true"
          class="text-sm text-neutral-100 leading-none p-2 text-center rounded-md bg-neutral-800 max-w-xs select-none text-balance shadow-sm"
        >
          <Motion v-bind="tooltipMotion">
            {{ content }}
            <TooltipArrow :width="12" :height="6" class="fill-neutral-800" />
          </Motion>
        </TooltipContent>
      </AnimatePresence>
    </TooltipPortal>
  </TooltipRoot>
</template>
