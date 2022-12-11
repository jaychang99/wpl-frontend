import { Variants } from "framer-motion";

const STAGGER_CHILDREN_ONE = 0.6;
const FADE_IN_DURATION = 1;

export const defaultEasing = [FADE_IN_DURATION, -0.05, 0.1, 0.9];

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: STAGGER_CHILDREN_ONE } },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: STAGGER_CHILDREN_ONE / 2 } },
};
export const staggerQuarter: Variants = {
  animate: { transition: { staggerChildren: STAGGER_CHILDREN_ONE / 4 } },
};

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity",
  },
};

export const defaultFadeInUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: FADE_IN_DURATION },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: FADE_IN_DURATION },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: FADE_IN_DURATION },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInScaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.3 },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.3 },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInSlideToRightVariants: Variants = {
  initial: {
    opacity: 0,
    x: -30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInSlideToLeftVariants: Variants = {
  initial: {
    opacity: 0,
    x: 30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};
