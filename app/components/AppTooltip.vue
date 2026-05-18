<script setup lang="ts">
import type { TooltipContentProps } from "reka-ui";

defineProps<{
  content: string;
  side?: TooltipContentProps["side"];
}>();
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger as-child>
      <slot />
    </TooltipTrigger>

    <TooltipPortal>
      <AnimatePresence>
        <TooltipContent as-child :side :side-offset="14" :collision-padding="4">
          <Motion
            v-bind="tooltipMotion"
            aria-hidden="true"
            class="text-sm text-neutral-100 leading-none p-2 text-center rounded-md bg-neutral-800 max-w-xs select-none text-balance shadow-sm"
          >
            {{ content }}
            <TooltipArrow :width="12" :height="6" class="fill-neutral-800" />
          </Motion>
        </TooltipContent>
      </AnimatePresence>
    </TooltipPortal>
  </TooltipRoot>
</template>
