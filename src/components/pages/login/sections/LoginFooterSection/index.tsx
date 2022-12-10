import CTATextButton from "components/common/CTATextButton";
import { StyledLoginFooterSection } from "components/pages/login/sections/LoginFooterSection/styles";
import React from "react";

function LoginFooterSection() {
  return (
    <StyledLoginFooterSection>
      <CTATextButton
        text="Not a member yet? go to"
        linkText="register"
        link="/register"
      />
    </StyledLoginFooterSection>
  );
}

export default LoginFooterSection;
