import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { typography } from "styles/utils/typography";

export const StyledMainHeroSection = styled(motion.main)`
  width: 100%;
  padding: 100px 0;
  ${({ theme }) => theme.device.container} {
    padding: 70px 0px 40px;
  }
  ${({ theme }) => theme.device.mobile} {
    padding: 50px 0px 20px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainHeroDescriptionText = styled(motion.div)`
  ${({ theme }) => typography(theme.color.primary500, 28, 400)}

  ${({ theme }) => theme.device.container} {
    ${({ theme }) => typography(theme.color.primary500, 24, 400)}
  }
  ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => typography(theme.color.primary500, 20, 400)}
  }
`;
