import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "styles/utils/typography";

export const boxStyle = (theme: Theme) => css`
  border-radius: 10px;
  border: 1px solid ${theme.color.primary200};
  background-color: transparent;
`;

export const BoxLabel = styled.p`
  margin-bottom: 10px;
  ${({ theme }) => typography(theme.color.primary400, 12, 400)}
`;
