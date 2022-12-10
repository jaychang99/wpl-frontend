import {
  CardBottomInfoContainer,
  PlaceCategoryText,
  PlaceCrowdnessContainer,
  PlaceFacilityContainer,
  PlaceIndicatorContainer,
  PlaceLastUpdatedText,
  PlaceNameText,
  StyledCard,
} from "components/common/Card/styles";
import ChargeIcon from "components/common/icons/ChargeIcon";
import CrowdnessIcon from "components/common/icons/CrowdnessIcon";
import RestroomIcon from "components/common/icons/RestroomIcon";
import WifiIcon from "components/common/icons/WifiIcon";
import { CATEGORIES } from "constants/categories";
import React, { HTMLAttributes } from "react";
import { Place } from "types/api";
import { getCrowdnessPercentage } from "../../../utils/crowdness";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "id">, Place {}

function Card({
  id,
  name,
  category,
  crowdness,
  facilities,
  lastUpdated,
}: Props) {
  return (
    <StyledCard>
      Card
      <CardBottomInfoContainer>
        <PlaceCategoryText>{CATEGORIES[category - 1]}</PlaceCategoryText>
        <PlaceNameText>{name}</PlaceNameText>
        <PlaceLastUpdatedText>
          Last updated: {lastUpdated.toLocaleString("en-US")}
        </PlaceLastUpdatedText>
        <PlaceIndicatorContainer>
          <PlaceCrowdnessContainer>
            <CrowdnessIcon /> {getCrowdnessPercentage(crowdness)}
          </PlaceCrowdnessContainer>
          <PlaceFacilityContainer>
            {facilities.includes(1) && <WifiIcon />}
            {facilities.includes(2) && <ChargeIcon />}
            {facilities.includes(3) && <RestroomIcon />}
          </PlaceFacilityContainer>
        </PlaceIndicatorContainer>
      </CardBottomInfoContainer>
    </StyledCard>
  );
}

export default Card;
