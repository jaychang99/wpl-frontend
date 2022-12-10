import { css, Global, Theme, useTheme } from "@emotion/react";
import emotionReset from "emotion-reset";
import { resetAnchorStyle } from "styles/utils/anchor";

const globalStyles = (theme: Theme) => css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-std.css");

  ${emotionReset}
  html {
    // the amount of content decides whether there be a scroll bar
    // therefore, if we move to a content-rich page to the opposite,
    // all DOM elements will shift due to the removal of scrollbar.
    // therefore, we need this to always display scrollbar regardless of the amount of the content
    overflow-y: scroll;
  }

  html,
  body {
    min-height: 100%;
    word-break: keep-all;
    line-height: 1.5;
    letter-spacing: -0.005em;

    font-size: 16px;
    font-family: "Pretendard Std Variable", "Pretendard Std", Pretendard,
      -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
      "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      sans-serif;
  }

  body {
    background-color: white;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  * {
    box-sizing: border-box;
  }

  a {
    ${resetAnchorStyle}
  }
`;

export function GlobalStyles() {
  const theme = useTheme();

  return <Global styles={globalStyles(theme)} />;
}
