import Card from "components/common/Card";
import Typography from "components/common/Typography";
import {
  MainCurrentQuietPlaceContainer,
  StyledMainCurrentQuietPlaceSection,
} from "components/pages/main/sections/MainCurrentQuietPlaceSection/styles";
import { MOCKUP_PLACES_PAGE_1 } from "mockups/places";

function MainCurrentQuietPlaceSection() {
  return (
    <StyledMainCurrentQuietPlaceSection>
      <Typography size={"h2"}>Currently Quiet Places</Typography>
      <MainCurrentQuietPlaceContainer>
        {MOCKUP_PLACES_PAGE_1.content.map((place) => (
          <Card key={place.id} />
        ))}
      </MainCurrentQuietPlaceContainer>
    </StyledMainCurrentQuietPlaceSection>
  );
}

export default MainCurrentQuietPlaceSection;
