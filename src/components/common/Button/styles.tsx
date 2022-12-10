import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Props } from "components/common/Button";

const sizeStyle = (theme: Theme, size: Props["size"]) => css`
  ${size === "large" &&
  css`
    /* width: 260px; */
    height: 56px;
    font-size: 16px;
  `}
  ${size === "small" &&
  css`
    /* width: 100px; */
    height: 36px;
    font-size: 12px;
  `}
`;

function getColorByVariant(variant: Props["variant"]) {
  if (variant === "primary") return "primary";
  else return "black";
}

const colorStyle = (
  theme: Theme,
  variant: Props["variant"],
  filled: Props["filled"]
) => css`
  ${filled
    ? css`
        background-color: ${theme.color[`${getColorByVariant(variant)}700`]};
        color: ${theme.color[`${getColorByVariant(variant)}100`]};
        border: none;
        &:hover {
          background-color: ${theme.color[`${getColorByVariant(variant)}800`]};
        }
        &:active {
          background-color: ${theme.color[`${getColorByVariant(variant)}900`]};
        }
      `
    : css`
        background-color: transparent;
        color: ${theme.color[`${getColorByVariant(variant)}700`]};
        border: 1px solid ${theme.color[`${getColorByVariant(variant)}700`]};
        &:hover {
          background-color: ${theme.color[`${getColorByVariant(variant)}100`]};
        }
        &:active {
          background-color: ${theme.color[`${getColorByVariant(variant)}200`]};
        }
      `}
`;

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 10px;
  ${({ theme, size }) => sizeStyle(theme, size)}
  ${({ theme, variant, filled }) => colorStyle(theme, variant, filled)}
`;
