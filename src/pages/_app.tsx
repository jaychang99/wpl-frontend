import { ThemeProvider } from "@emotion/react";
import AppLayout from "components/common/layout/AppLayout";
import { NextPageContext } from "next";

import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";
import { User } from "types/api";
import { getServerAxiosErrorInfo, serverAxios } from "utils/commonAxios";
import { authFetcher } from "utils/fetcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayout nickname={pageProps.nickname}>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
