import Input from "components/common/Input";
import { StyledLoginFormSection } from "components/pages/login/sections/LoginFormSection/styles";
import React from "react";

function LoginFormSection() {
  return (
    <StyledLoginFormSection>
      <Input label="email" placeholder="Please input email" />
      <Input
        type="password"
        label="password"
        placeholder="Please input password"
      />
    </StyledLoginFormSection>
  );
}

export default LoginFormSection;
