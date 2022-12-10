import styled from "@emotion/styled";
import { typography } from "styles/utils/typography";

export const Head1 = styled.h1`
  ${({ theme }) => typography(theme.color.primary500, 70, 700)}
`;

export const Head2 = styled.h2`
  ${typography("default", 32, 700)}
`;
