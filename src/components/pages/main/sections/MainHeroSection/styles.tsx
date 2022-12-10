import styled from "@emotion/styled";
import { typography } from "styles/utils/typography";

export const StyledMainHeroSection = styled.main`
  width: 100%;
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainHeroDescriptionText = styled.div`
  ${({ theme }) => typography(theme.color.primary500, 28, 400)}
`;
