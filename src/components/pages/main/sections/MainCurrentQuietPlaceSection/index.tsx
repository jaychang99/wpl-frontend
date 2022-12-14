import Card from "components/common/Card";
import Typography from "components/common/Typography";
import {
  MainCurrentQuietPlaceContainer,
  StyledMainCurrentQuietPlaceSection,
} from "components/pages/main/sections/MainCurrentQuietPlaceSection/styles";
import { MOCKUP_PLACES_PAGE_1 } from "mockups/places";
import { usePlacesContext } from "components/pages/contexts/PlacesContext";
import { Place } from "types/api";
import { staggerOne } from "styles/motions";
import {
  defaultFadeInSlideToRightVariants,
  defaultFadeInUpVariants,
  staggerHalf,
} from "styles/motions/motions";

function MainCurrentQuietPlaceSection() {
  const places = usePlacesContext() as any; // TODO: remove type assertion

  return (
    <StyledMainCurrentQuietPlaceSection
      variants={staggerHalf}
      initial="initial"
      whileInView="animate"
      exit="exit"
    >
      <Typography variants={defaultFadeInUpVariants} size={"h2"}>
        Featured Places
      </Typography>
      <MainCurrentQuietPlaceContainer>
        {places.places.map((place: Place) => (
          <Card variants={defaultFadeInUpVariants} key={place.id} {...place} />
        ))}
      </MainCurrentQuietPlaceContainer>
    </StyledMainCurrentQuietPlaceSection>
  );
}

export default MainCurrentQuietPlaceSection;
