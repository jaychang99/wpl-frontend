import Typography from "components/common/Typography";
import {
  MainHeroDescriptionText,
  StyledMainHeroSection,
} from "components/pages/main/sections/MainHeroSection/styles";
import React from "react";
import { defaultFadeInUpVariants, staggerOne } from "styles/motions";

function MainHeroSection() {
  return (
    <StyledMainHeroSection
      variants={staggerOne}
      initial="initial"
      whileInView="animate"
      exit="exit"
    >
      <Typography variants={defaultFadeInUpVariants} size={"h1"}>
        Where To Study
      </Typography>
      <MainHeroDescriptionText variants={defaultFadeInUpVariants}>
        No more unnecessary visits to crowded places!
      </MainHeroDescriptionText>
      <MainHeroDescriptionText variants={defaultFadeInUpVariants}>
        We do not even have enough time only to study!
      </MainHeroDescriptionText>
    </StyledMainHeroSection>
  );
}

export default MainHeroSection;
