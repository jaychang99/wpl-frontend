import { css } from "@emotion/react";

export function typography(
  color: string,
  fontSize: number,
  fontWeight: number
) {
  const typographyStyle = css`
    color: ${color === "default" ? "inherit" : color};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
  `;

  return typographyStyle;
}
