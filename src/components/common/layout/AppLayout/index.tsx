import {
  Container,
  ContentBox,
} from "components/common/layout/AppLayout/styles";
import Navbar from "components/common/Navbar";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <ContentBox>{children}</ContentBox>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default AppLayout;
