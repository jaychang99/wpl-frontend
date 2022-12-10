import {
  CardBottomInfoContainer,
  PlaceCategoryText,
  PlaceLastUpdatedText,
  PlaceNameText,
  StyledCard,
} from "components/common/Card/styles";
import { CATEGORIES } from "constants/categories";
import React, { HTMLAttributes } from "react";
import { Place } from "types/api";

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
      </CardBottomInfoContainer>
    </StyledCard>
  );
}

export default Card;
