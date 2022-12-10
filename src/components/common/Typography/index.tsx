import { Head1, Head2 } from "components/common/Typography/styles";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  size: "h1" | "h2";
}

function Typography({ size, ...props }: Props) {
  return <>{size === "h1" ? <Head1 {...props} /> : <Head2 {...props} />}</>;
}

export default Typography;
