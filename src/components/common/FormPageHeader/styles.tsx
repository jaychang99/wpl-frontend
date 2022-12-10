import styled from "@emotion/styled";
import { typography } from "styles/utils/typography";

export const StyledFormPageHeader = styled.header`
  width: 100%;
  padding: 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 50px;
`;

export const FormPageHeaderHeadingText = styled.div`
  ${({ theme }) => typography(theme.color.black900, 40, 700)}
`;
export const FormPageHeaderSubHeadingText = styled.div`
  ${({ theme }) => typography(theme.color.black500, 20, 400)}
`;
