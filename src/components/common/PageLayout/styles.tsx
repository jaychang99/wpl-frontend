import styled from "@emotion/styled";
import { PageLayoutType } from "components/common/PageLayout";

import { theme } from "styles/theme";

const LAYOUT_WIDTH = {
  wide: theme.widths.widePageWidth,
  default: theme.widths.defaultPageWidth,
};

export const StyledPageLayout = styled.div<{ type: PageLayoutType }>`
  flex: 1;
  max-width: ${({ theme, type }) =>
    `calc(${theme.padding.pageLayout} * 2 + ${LAYOUT_WIDTH[type]})`};
  width: 100%;
  margin: 0 auto;
  /* padding: 0 ${({ theme }) => theme.padding.pageLayout}; */
`;
