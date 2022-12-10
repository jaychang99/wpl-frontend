import { StyledPageLayout } from "components/common/PageLayout/styles";
import { HTMLAttributes } from "react";

export type PageLayoutType = "wide" | "default";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: PageLayoutType;
}

function PageLayout({ type = "default", children, ...props }: Props) {
  return (
    <div {...props}>
      <StyledPageLayout type={type}>{children}</StyledPageLayout>
    </div>
  );
}

export default PageLayout;
