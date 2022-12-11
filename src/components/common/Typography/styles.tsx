import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { typography } from "styles/utils/typography";

export const Head1 = styled(motion.h1)`
  ${({ theme }) => typography(theme.color.primary500, 70, 700)}

  ${({ theme }) => theme.device.container} {
    ${({ theme }) => typography(theme.color.primary500, 50, 700)}
  }
  ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => typography(theme.color.primary500, 40, 700)}
  }
`;

export const Head2 = styled(motion.h2)`
  ${typography("default", 32, 700)}

  ${({ theme }) => theme.device.container} {
    ${({ theme }) => typography("default", 28, 700)}
  }
  ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => typography("default", 24, 700)}
  }
`;
