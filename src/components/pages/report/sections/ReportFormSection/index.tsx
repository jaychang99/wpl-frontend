import { css } from "@emotion/react";
import Button from "components/common/Button";
import Dropdown from "components/common/Dropdown";
import Input from "components/common/Input";
import { StyledReportFormSection } from "components/pages/report/sections/ReportFormSection/styles";
import { CROWDEDNESS } from "constants/crowdedness";
import usePlaces from "hooks/usePlaces";

import { FormEvent, SetStateAction, useCallback, useState } from "react";
import { ReportInputFields } from "types/inputs";
import { serverAxios } from "utils/commonAxios";

function ReportFormSection() {
  const [selectedPlace, setSelectedPlace] = useState("");

  // fetch places info for dropdown
  const { placeNames, placeIds, error, mutate } = usePlaces();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function handleReport() {
      const requestURL = "/report";

      // the following is for the typescript compiler to be able to name if the inputs
      const form = e.currentTarget;
      const formElements = form
        ? (form.elements as typeof form.elements & ReportInputFields)
        : null;

      try {
        const config = {};
        const body = {
          email: formElements?.email.value,
          password: formElements?.password.value,
          nickname: formElements?.nickname.value,
        };

        serverAxios.post(requestURL, body, config).then(function (response) {
          // on success of POST request
        });
      } catch (e) {
        console.log(e);
      }
    }
    handleReport();
  }, []);

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
          setItem={setSelectedPlace}
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
