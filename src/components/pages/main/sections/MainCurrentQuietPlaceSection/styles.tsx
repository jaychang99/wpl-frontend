import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledMainCurrentQuietPlaceSection = styled(motion.section)`
  width: 100%;
  padding: 100px 0;

  ${({ theme }) => theme.device.container} {
    padding: 70px 0px 40px;
  }
  ${({ theme }) => theme.device.mobile} {
    padding: 20px 0;
  }
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const MainCurrentQuietPlaceContainer = styled(motion.div)`
  display: grid;
  gap: 36px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.intervals.i3};
  padding-top: 50px;

  ${({ theme }) => theme.device.container} {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 30px;
  }
  ${({ theme }) => theme.device.mobile} {
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.intervals.i2};
    padding-top: 10px;
  }
`;
