import PageLayout from "components/common/PageLayout";
import RegisterFooterSection from "components/pages/register/sections/RegisterFooterSection";
import RegisterFormSection from "components/pages/register/sections/RegisterFormSection";
import RegisterHeaderSection from "components/pages/register/sections/RegisterHeaderSection";
import type { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <PageLayout type="default">
      <RegisterHeaderSection />
      <RegisterFormSection />
      <RegisterFooterSection />
    </PageLayout>
  );
};

export default Register;
