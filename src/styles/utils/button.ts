import { css } from "@emotion/react";

// resets default CSS button style.
// for Modal, espcially, since this is outside the scope of Emotion's GlobalStyles
export const resetButtonStyle = css`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
