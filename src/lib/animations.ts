// Animation utilities for page transitions
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeIn: [0.7, 0, 0.84, 0] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
} as const;

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  slower: 1.2,
} as const;

// Page transition variants
export const pageTransitionVariants = {
  initial: {
    scaleY: 0,
    originY: 1, // Start from bottom
  },
  animate: {
    scaleY: 1,
    originY: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  exit: {
    scaleY: 0,
    originY: 0, // Exit to top
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
} as const;

// Alternative slide variants
export const slideVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
} as const;

// Cover reveal variants
export const coverRevealVariants = {
  initial: {
    scaleY: 0,
    originY: 1, // Start from bottom
    opacity: 1,
  },
  animate: {
    scaleY: 1,
    originY: 1,
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  exit: {
    scaleY: 0,
    originY: 0, // Exit to top
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
} as const;
