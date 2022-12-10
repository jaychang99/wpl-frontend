import {
  Container,
  ContentBox,
} from "components/common/layout/AppLayout/styles";
import Navbar from "components/common/Navbar";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  nickname?: string;
}

function AppLayout({ children, nickname }: Props) {
  return (
    <>
      <Navbar nickname={nickname} />
      <Container>
        <ContentBox>{children}</ContentBox>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default AppLayout;
