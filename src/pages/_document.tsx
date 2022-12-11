import { PORTAL_ID } from "constants/portal";
import { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body>
        <Main />
        {/* Modal -> regardless of where it's called, always on top */}
        <div id={PORTAL_ID} />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
