import { css, Theme } from "@emotion/react";

// custom scroll bar for modal
export const customScrollbar = (theme: Theme) => css`
  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.black100};
    border-radius: 2px;
  }
`;
