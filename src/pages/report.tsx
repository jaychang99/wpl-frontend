import PageLayout from "components/common/PageLayout";
import ReportFooterSection from "components/pages/report/sections/ReportFooterSection";
import ReportFormSection from "components/pages/report/sections/ReportFormSection";
import ReportHeaderSection from "components/pages/report/sections/ReportHeaderSection";
import type { GetServerSideProps, NextPage } from "next";
import { getServerAxiosErrorInfo, serverAxios } from "utils/commonAxios";
import getNavbarServerSideProps from "utils/getServerSideProps";

const Report: NextPage = () => {
  return (
    <PageLayout type="default">
      <ReportHeaderSection />
      <ReportFormSection />
      <ReportFooterSection />
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
      return {
        props: {
          nickname,
        },
      };
    } else {
      // not logged in
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
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

export default Report;
