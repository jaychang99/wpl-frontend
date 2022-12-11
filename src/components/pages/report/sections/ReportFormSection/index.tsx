import { css } from "@emotion/react";
import Button from "components/common/Button";
import Dropdown from "components/common/Dropdown";
import Input from "components/common/Input";
import { StyledReportFormSection } from "components/pages/report/sections/ReportFormSection/styles";
import { FormEvent, SetStateAction, useCallback, useState } from "react";
import { ReportInputFields } from "types/inputs";
import { serverAxios } from "utils/commonAxios";

function ReportFormSection() {
  const [selectedPlace, setSelectedPlace] = useState("");

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
          console.log("REGISTER SUCCESSFUL");
          console.log(response.data);
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
          label="place"
          placeholder="Select Place"
          list={["hello", "I am", "Dropdown"]}
          setItem={setSelectedPlace}
        />
        <Dropdown
          label="crowdness"
          placeholder="Select Crowdness"
          list={["hello", "I am", "Dropdown"]}
          setItem={setSelectedPlace}
        />
        <Input
          type="email"
          name="email"
          label="email"
          placeholder="Please input email"
        />
        <Input
          type="password"
          label="password"
          name="password"
          placeholder="Please input password"
        />
        <Input
          type="password"
          label="confirm password"
          placeholder="Please confirm password"
        />
        <Input
          name="nickname"
          label="nickname"
          placeholder="Please input nickname"
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
