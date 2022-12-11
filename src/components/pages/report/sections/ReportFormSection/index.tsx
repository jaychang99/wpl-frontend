import { css } from "@emotion/react";
import Button from "components/common/Button";
import Dropdown from "components/common/Dropdown";
import { StyledReportFormSection } from "components/pages/report/sections/ReportFormSection/styles";
import { CROWDEDNESS } from "constants/crowdedness";
import usePlaces from "hooks/usePlaces";

import { FormEvent, useCallback, useState } from "react";
import {
  getIdOfPlaceName,
  getNumberFromCrowdnessPercentage,
} from "utils/apiPipes";
import { serverAxios } from "utils/commonAxios";
import { getCookie } from "utils/cookies";

function ReportFormSection() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedCrowdedness, setselectedCrowdedness] = useState("");

  // fetch places info for dropdown
  const { placeNames, placeIds, error, mutate } = usePlaces();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      async function handleReport() {
        const requestURL = "/places";

        try {
          const token = getCookie("wts_web_token", document.cookie);
          const config = { headers: { Authorization: `Bearer ${token}` } };
          const body = {
            placeId: getIdOfPlaceName(selectedPlace, placeNames, placeIds),
            crowdness: getNumberFromCrowdnessPercentage(selectedCrowdedness),
          };

          serverAxios.patch(requestURL, body, config).then(function (response) {
            // on success of POST request
            console.log("REPORT GENERATED");
          });
        } catch (e) {
          console.log(e);
        }
      }
      handleReport();
    },
    [placeIds, placeNames, selectedCrowdedness, selectedPlace]
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledReportFormSection>
        <Dropdown
          stackingorder={1}
          label="place"
          placeholder="Select Place"
          list={placeNames}
          setItem={setSelectedPlace}
        />
        <Dropdown
          stackingorder={2}
          label="crowdedness"
          placeholder="Select Crowdedness"
          list={CROWDEDNESS}
          setItem={setselectedCrowdedness}
        />

        <Button
          type="submit"
          css={css`
            margin-top: 30px;
          `}
        >
          Make mine the latest report!
        </Button>
      </StyledReportFormSection>
    </form>
  );
}

export default ReportFormSection;
