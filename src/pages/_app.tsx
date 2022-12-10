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

// MyApp.getInitialProps = async ({ res, req, err, ...rest }: NextPageContext) => {
//   const cookies = req?.headers.cookie;
//   console.log(req);
//   console.log("COOKIES", cookies);
//   const requestURL = "/users/me";
//   try {
//     const { nickname: nickname } = await authFetcher<User>(requestURL, cookies);
//     console.log("SUCCESS");
//     return {
//       props: {
//         nickname,
//       },
//     };
//   } catch (err) {
//     // console.log("FAIL");
//     console.log(err);
//     const { title, statusCode } = getServerAxiosErrorInfo(err);

//     return {
//       props: {
//         error: { title, statusCode },
//         data: {},
//       },
//     };
//   }
// };

export default MyApp;
