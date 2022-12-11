import PageLayout from "components/common/PageLayout";
import LoginFooterSection from "components/pages/login/sections/LoginFooterSection";
import LoginFormSection from "components/pages/login/sections/LoginFormSection";
import LoginHeaderSection from "components/pages/login/sections/LoginHeaderSection";
import type { GetServerSideProps, NextPage } from "next";
import { getServerAxiosErrorInfo } from "utils/commonAxios";
import getNavbarServerSideProps from "utils/getServerSideProps";

const Login: NextPage = () => {
  return (
    <PageLayout type="default">
      <LoginHeaderSection />
      <LoginFormSection />
      <LoginFooterSection />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const nicknameObject = await getNavbarServerSideProps({ ...(ctx as any) });
  const nickname = nicknameObject.props.nickname;

  const requestURL = "places";
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const config = {};
  try {
    if (nickname) {
      // if logged in
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {},
      };
    } else {
      // not logged in
      return {
        props: {},
      };
    }
  } catch (err) {
    const { title, statusCode } = getServerAxiosErrorInfo(err);

    return {
      props: {
        error: { title, statusCode },
        data: {},
      },
    };
  }
};

export default Login;
