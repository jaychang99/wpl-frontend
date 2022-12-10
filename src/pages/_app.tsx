import { ThemeProvider } from "@emotion/react";
import AppLayout from "components/common/layout/AppLayout";

import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
