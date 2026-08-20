import type { Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Single parent-level scroll trigger driving all children via staggerChildren,
 * instead of N per-item viewport observers. Cuts main-thread work during fast
 * scroll on list-heavy sections, which is where the animation jank was coming from.
 */
export const staggerContainer = (stagger = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem = (distance = 14, axis: "x" | "y" = "y"): Variants => {
  if (axis === "x") {
    return {
      hidden: { opacity: 0, x: distance },
      show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
    };
  }
  return {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  };
};
