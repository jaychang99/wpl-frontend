import styled from "@emotion/styled";
import { typography } from "styles/utils/typography";

export const StyledCTATextButton = styled.div`
  ${({ theme }) => typography(theme.color.black500, 12, 400)}
  display: inline;
`;

export const CTATextButtonLinkText = styled.div`
  text-decoration: underline;
  display: inline;
`;
