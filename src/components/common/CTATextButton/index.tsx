import {
  CTATextButtonLinkText,
  StyledCTATextButton,
} from "components/common/CTATextButton/styles";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string; // main text without link
  linkText: string; // the text that will be underlined
  link: string; // the URL to go to when clicked on linkText
}

function CTATextButton({ text, linkText, link, ...props }: Props) {
  return (
    <StyledCTATextButton>
      {text}
      <Link href={link} passHref>
        <CTATextButtonLinkText>&nbsp;{linkText}</CTATextButtonLinkText>
      </Link>
      &nbsp; &#12297;
    </StyledCTATextButton>
  );
}

export default CTATextButton;
