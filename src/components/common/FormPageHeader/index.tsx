import {
  FormPageHeaderHeadingText,
  FormPageHeaderSubHeadingText,
  StyledFormPageHeader,
} from "components/common/FormPageHeader/styles";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  headingText: string;
  subHeadingText?: string;
}

function FormPageHeader({ headingText, subHeadingText, ...props }: Props) {
  return (
    <StyledFormPageHeader>
      <FormPageHeaderHeadingText>{headingText}</FormPageHeaderHeadingText>
      {subHeadingText && (
        <FormPageHeaderSubHeadingText>
          {subHeadingText}
        </FormPageHeaderSubHeadingText>
      )}
    </StyledFormPageHeader>
  );
}

export default FormPageHeader;
