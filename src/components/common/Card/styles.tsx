import styled from "@emotion/styled";
import { typography } from "styles/utils/typography";

export const StyledCard = styled.div`
  position: relative;
  width: 300px;
  height: 420px;

  border-radius: 20px;

  box-shadow: 0px 2px 8px rgba(95, 123, 255, 0.25);
`;

export const CardTopImageContainer = styled.div`
  position: absolute;
  /* background-color: red; */
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 50%;
  overflow: hidden; // this allows border radius of this container to be applied
`;

export const CardBottomInfoContainer = styled.div`
  /* self-related */
  /* background-color: red; */
  border-radius: 0 0 20px 20px;
  position: absolute;
  top: 50%;
  height: 50%;
  width: 100%;

  /* children-related */
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const PlaceCategoryText = styled.div`
  ${({ theme }) => typography(theme.color.black700, 12, 400)}
`;
export const PlaceNameText = styled.div`
  ${({ theme }) => typography(theme.color.black900, 20, 700)}
`;

export const PlaceLastUpdatedText = styled.div`
  ${({ theme }) => typography(theme.color.black700, 12, 400)}
  align-self: flex-end;
`;

export const PlaceIndicatorContainer = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.black100};
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PlaceCrowdnessContainer = styled.div`
  display: flex;
`;
export const PlaceFacilityContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;
