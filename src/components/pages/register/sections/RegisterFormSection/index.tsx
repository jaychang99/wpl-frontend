import { css } from "@emotion/react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { StyledRegisterFormSection } from "components/pages/register/sections/RegisterFormSection/styles";
import { FormEvent, useCallback } from "react";
import { RegisterInputFields } from "types/inputs";
import { serverAxios } from "utils/commonAxios";

function RegisterFormSection() {
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function handleRegister() {
      const requestURL = "/auth/register";

      // the following is for the typescript compiler to be able to name if the inputs
      const form = e.currentTarget;
      const formElements = form
        ? (form.elements as typeof form.elements & RegisterInputFields)
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
          // register successful
        });
      } catch (e) {
        console.log(e);
      }
    }
    handleRegister();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <StyledRegisterFormSection>
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
          Register
        </Button>
      </StyledRegisterFormSection>
    </form>
  );
}

export default RegisterFormSection;
