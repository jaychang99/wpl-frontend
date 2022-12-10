import {
  NavbarContainer,
  NavbarLogoText,
  NavbarMenuContainer,
  StyledNavbar,
} from "components/common/Navbar/styles";
import useScrollPosition from "hooks/useScrollPosition";
import React, { HTMLAttributes } from "react";
import { NavbarMenuItem } from "./styles";

interface Props extends HTMLAttributes<HTMLElement> {}

function Navbar(props: Props) {
  const { scrollY } = useScrollPosition();

  return (
    <StyledNavbar transparent={scrollY === 0} {...props}>
      <NavbarContainer>
        <NavbarLogoText>WTS</NavbarLogoText>
        <NavbarMenuContainer>
          <NavbarMenuItem>Login</NavbarMenuItem>
          <NavbarMenuItem>Register</NavbarMenuItem>
        </NavbarMenuContainer>
      </NavbarContainer>
    </StyledNavbar>
  );
}

export default Navbar;
