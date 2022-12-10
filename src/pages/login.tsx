import PageLayout from "components/common/PageLayout";
import LoginHeaderSection from "components/pages/login/sections/LoginHeaderSection";
import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <PageLayout type="default">
      <LoginHeaderSection />
    </PageLayout>
  );
};

export default Login;
