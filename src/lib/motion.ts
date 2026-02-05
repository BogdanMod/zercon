export const EASING = {
  primary: [0.22, 1, 0.36, 1] as const,
  secondary: [0.4, 0, 0.2, 1] as const,
};

export const TRANSITIONS = {
  hero: {
    duration: 1.0,
    ease: EASING.primary,
  },
  section: {
    duration: 0.8,
    ease: EASING.secondary,
  },
  soft: {
    duration: 0.7,
    ease: EASING.secondary,
  },
};

export const VARIANTS = {
  hero: {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  section: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
  product: {
    hidden: { opacity: 0, y: 20, rotateX: 2, rotateY: -2 },
    show: { opacity: 1, y: 0, rotateX: 0, rotateY: 0 },
  },
};
