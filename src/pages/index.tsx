import PageLayout from "components/common/PageLayout";
import MainCurrentQuietPlaceSection from "components/pages/main/sections/MainCurrentQuietPlaceSection";
import MainHeroSection from "components/pages/main/sections/MainHeroSection";
import type { GetServerSideProps, NextPage } from "next";
import { PlacesProvider } from "pages/contexts/PlacesContext";
import { Place } from "types/api";
import { getServerAxiosErrorInfo, serverAxios } from "utils/commonAxios";
import getNavbarServerSideProps from "utils/getServerSideProps";

interface Props {
  places: Place[];
}

const Home = (props: Props) => {
  return (
    <PlacesProvider value={props.places}>
      <PageLayout type="default">
        <MainHeroSection />
        <MainCurrentQuietPlaceSection />
      </PageLayout>
    </PlacesProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const nicknameObject = await getNavbarServerSideProps({ ...(ctx as any) });
  // const nickname = nicknameObject.props.nickname;

  const requestURL = "places";
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const config = {};
  try {
    const { data: places } = await serverAxios.get<Place[]>(requestURL, config);
    console.log("-----", places);
    return {
      props: {
        places,
        // nickname,
      },
    };
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

export default Home;
