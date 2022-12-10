import { css } from "@emotion/react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { StyledLoginFormSection } from "components/pages/login/sections/LoginFormSection/styles";
import router from "next/router";
import { FormEvent, useCallback } from "react";
import { LoginInputFields } from "types/inputs";
import { serverAxios } from "utils/commonAxios";
import { setCookie } from "utils/cookies";

function LoginFormSection() {
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function handleRegister() {
      const requestURL = "/auth/login";

      // the following is for the typescript compiler to be able to name if the inputs
      const form = e.currentTarget;
      const formElements = form
        ? (form.elements as typeof form.elements & LoginInputFields)
        : null;

      try {
        const config = {};
        const body = {
          email: formElements?.email.value,
          password: formElements?.password.value,
        };

        serverAxios.post(requestURL, body, config).then(function (response) {
          // on success of POST request
          console.log("LOGIN SUCCESSFUL");
          router.push("/");
          console.log(response.data);
          setCookie("wts_web_token", response.data.access_token, 1);
        });
      } catch (e) {
        console.log(e);
      }
    }
    handleRegister();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <StyledLoginFormSection>
        <Input
          name="email"
          type="email"
          label="email"
          placeholder="Please input email"
        />
        <Input
          name="password"
          type="password"
          label="password"
          placeholder="Please input password"
        />
        <Button
          type="submit"
          css={css`
            margin-top: 30px;
          `}
        >
          Login
        </Button>
      </StyledLoginFormSection>
    </form>
  );
}

export default LoginFormSection;
