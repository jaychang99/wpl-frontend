import PageLayout from "components/common/PageLayout";
import LoginFooterSection from "components/pages/login/sections/LoginFooterSection";
import LoginFormSection from "components/pages/login/sections/LoginFormSection";
import LoginHeaderSection from "components/pages/login/sections/LoginHeaderSection";
import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <PageLayout type="default">
      <LoginHeaderSection />
      <LoginFormSection />
      <LoginFooterSection />
    </PageLayout>
  );
};

export default Login;
