import Typography from "components/common/Typography";
import {
  MainHeroDescriptionText,
  StyledMainHeroSection,
} from "components/pages/main/sections/MainHeroSection/styles";
import React from "react";

function MainHeroSection() {
  return (
    <StyledMainHeroSection>
      <Typography size={"h1"}>Where To Study</Typography>
      <MainHeroDescriptionText>
        No more unnecessary visits to crowded places!
      </MainHeroDescriptionText>
      <MainHeroDescriptionText>
        We don’t even have enough time only to study!
      </MainHeroDescriptionText>
    </StyledMainHeroSection>
  );
}

export default MainHeroSection;
