import { css } from "@emotion/react";
import {
  CardBottomInfoContainer,
  CardTopImageContainer,
  PlaceBottonInfoTopContainer,
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
import Image from "next/image";
import { usePlacesContext } from "components/pages/contexts/PlacesContext";
import React, { HTMLAttributes } from "react";
import { Place } from "types/api";
import { getCrowdnessPercentage } from "utils/crowdness";
import { HTMLMotionProps } from "framer-motion";

interface Props extends Omit<HTMLMotionProps<"div">, "id">, Place {}

function Card({
  id,
  name,
  category,
  crowdness,
  facilities,
  lastUpdated,
  ...props
}: Props) {
  const imageCss = { objectFit: "cover" } as React.CSSProperties;

  return (
    <StyledCard {...props}>
      <CardTopImageContainer>
        <Image
          alt="place image"
          fill
          src={`/images/place${id}.png`}
          style={imageCss}
        />
      </CardTopImageContainer>
      <CardBottomInfoContainer>
        <PlaceBottonInfoTopContainer>
          <PlaceCategoryText>{CATEGORIES[category - 1]}</PlaceCategoryText>
          <PlaceNameText>{name}</PlaceNameText>
          <PlaceLastUpdatedText>
            Last updated: {lastUpdated.toLocaleString("en-US")}
          </PlaceLastUpdatedText>
        </PlaceBottonInfoTopContainer>
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
