import PageLayout from "components/common/PageLayout";
import ReportFooterSection from "components/pages/report/sections/ReportFooterSection";
import ReportFormSection from "components/pages/report/sections/ReportFormSection";
import ReportHeaderSection from "components/pages/report/sections/ReportHeaderSection";
import type { NextPage } from "next";
import getServerSideProps from "utils/getServerSideProps";

const Report: NextPage = () => {
  return (
    <PageLayout type="default">
      <ReportHeaderSection />
      <ReportFormSection />
      <ReportFooterSection />
    </PageLayout>
  );
};

export { getServerSideProps };

export default Report;
