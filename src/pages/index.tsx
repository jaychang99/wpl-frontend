import PageLayout from "components/common/PageLayout";
import MainCurrentQuietPlaceSection from "components/pages/main/sections/MainCurrentQuietPlaceSection";
import MainHeroSection from "components/pages/main/sections/MainHeroSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageLayout type="default">
      <MainHeroSection />
      <MainCurrentQuietPlaceSection />
    </PageLayout>
  );
};

export default Home;
