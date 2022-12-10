import { css } from "@emotion/react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { StyledLoginFormSection } from "components/pages/login/sections/LoginFormSection/styles";

function LoginFormSection() {
  return (
    <StyledLoginFormSection>
      <Input label="email" placeholder="Please input email" />
      <Input
        type="password"
        label="password"
        placeholder="Please input password"
      />
      <Button
        css={css`
          margin-top: 30px;
        `}
      >
        Login
      </Button>
    </StyledLoginFormSection>
  );
}

export default LoginFormSection;
