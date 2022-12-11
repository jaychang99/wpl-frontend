import styled from "@emotion/styled";
import { motion, Variants } from "framer-motion";
import { defaultEasing } from "styles/motions";

export const DimBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  overflow: hidden;
`;

export const ContentWrapper = styled(motion.div)`
  position: absolute;
  top: 100%;
  transform: translateY(-100%);

  width: 100%;
  height: max-content;

  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  overflow-y: scroll;
`;

export const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "transform",
  },
  animate: {
    y: "-100%",
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "transform",
  },
  exit: {
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "transform",
  },
};
