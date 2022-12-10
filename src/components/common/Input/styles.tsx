import styled from "@emotion/styled";
import { boxStyle } from "components/common/Box";
import { typography } from "styles/utils/typography";

export const InputContainer = styled.div`
  min-width: 100px;
  width: 100%;
`;

export const StyledInput = styled.input`
  // borders of input
  ${({ theme }) => boxStyle(theme)}

  width: 300px;
  height: 56px;
  padding: 16px;

  font-family: inherit; // html form elements require explicit font inheritance
  ${({ theme }) => typography(theme.color.black900, 16, 400)}

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.primary500};
    transition: 0.2s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black500};
  }
`;
