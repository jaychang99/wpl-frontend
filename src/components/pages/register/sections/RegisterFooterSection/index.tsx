import CTATextButton from "components/common/CTATextButton";
import { StyledRegisterFooterSection } from "components/pages/register/sections/RegisterFooterSection/styles";
import React from "react";

function RegisterFooterSection() {
  return (
    <StyledRegisterFooterSection>
      <CTATextButton
        text="Already a member? go to"
        linkText="login"
        link="/login"
      />
    </StyledRegisterFooterSection>
  );
}

export default RegisterFooterSection;
