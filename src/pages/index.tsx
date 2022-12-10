import PageLayout from "components/common/PageLayout";
import MainHeroSection from "components/pages/main/sections/MainHeroSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageLayout type="default">
      <MainHeroSection />
    </PageLayout>
  );
};

export default Home;
