import { css } from "@emotion/react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { StyledRegisterFormSection } from "components/pages/register/sections/RegisterFormSection/styles";

function RegisterFormSection() {
  return (
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
        css={css`
          margin-top: 30px;
        `}
      >
        Register
      </Button>
    </StyledRegisterFormSection>
  );
}

export default RegisterFormSection;
