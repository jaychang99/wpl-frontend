import Card from "components/common/Card";

import { ComponentProps } from "react";
import { createPageContext } from "utils/createPageContext";

const { Provider: PlacesProvider, usePageContext: usePlacesContext } =
  createPageContext<ComponentProps<typeof Card>[]>();

export { PlacesProvider, usePlacesContext };
