import Card from "components/common/Card";
import Typography from "components/common/Typography";
import {
  MainCurrentQuietPlaceContainer,
  StyledMainCurrentQuietPlaceSection,
} from "components/pages/main/sections/MainCurrentQuietPlaceSection/styles";
import { MOCKUP_PLACES_PAGE_1 } from "mockups/places";
import { usePlacesContext } from "components/pages/contexts/PlacesContext";
import { Place } from "types/api";

function MainCurrentQuietPlaceSection() {
  const places = usePlacesContext() as any; // TODO: remove type assertion

  return (
    <StyledMainCurrentQuietPlaceSection>
      <Typography size={"h2"}>Currently Quiet Places</Typography>
      <MainCurrentQuietPlaceContainer>
        {places.places.map((place: Place) => (
          <Card key={place.id} {...place} />
        ))}
      </MainCurrentQuietPlaceContainer>
    </StyledMainCurrentQuietPlaceSection>
  );
}

export default MainCurrentQuietPlaceSection;
