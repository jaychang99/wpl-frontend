import { ThemeProvider } from "@emotion/react";
import Navbar from "components/common/Navbar";
import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
