import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { typography } from "styles/utils/typography";

export const Head1 = styled(motion.h1)`
  ${({ theme }) => typography(theme.color.primary500, 70, 700)}
`;

export const Head2 = styled(motion.h2)`
  ${typography("default", 32, 700)}
`;
