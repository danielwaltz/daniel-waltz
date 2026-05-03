import type { MotionProps, Transition } from "motion-v";

export const DEFAULT_TRANSITION = {
  visualDuration: 0.1,
} as const satisfies Transition;

export const tooltipMotion = {
  transition: DEFAULT_TRANSITION,
  variants: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
} as const satisfies MotionProps;

export const pageMotion = {
  transition: DEFAULT_TRANSITION,
  variants: {
    hidden: { translateY: "-1rem", opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
} as const satisfies MotionProps;
