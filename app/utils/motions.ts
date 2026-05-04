import type { MotionProps, Transition } from "motion-v";

export const DEFAULT_TRANSITION = {
  type: "spring",
  ease: "easeOut",
  duration: 0.2,
  visualDuration: 0.2,
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
    hidden: {
      scale: 0.98,
      translateY: -8,
      opacity: 0,
      transformOrigin: "top center",
    },
    visible: {
      scale: 1,
      translateY: 0,
      opacity: 1,
      transformOrigin: "top center",
    },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
} as const satisfies MotionProps;
