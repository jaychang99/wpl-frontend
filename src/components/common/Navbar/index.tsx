import {
  NavbarContainer,
  NavbarLogoText,
  NavbarMenuContainer,
  StyledNavbar,
} from "components/common/Navbar/styles";
import useScrollPosition from "hooks/useScrollPosition";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { NavbarMenuItem } from "./styles";

interface Props extends HTMLAttributes<HTMLElement> {}

function Navbar(props: Props) {
  const { scrollY } = useScrollPosition();

  return (
    <StyledNavbar transparent={scrollY === 0} {...props}>
      <NavbarContainer>
        <Link href="/">
          <NavbarLogoText>WTS</NavbarLogoText>
        </Link>
        <NavbarMenuContainer>
          <Link href="/login">
            <NavbarMenuItem>Login</NavbarMenuItem>
          </Link>
          <Link href="/register">
            <NavbarMenuItem>Register</NavbarMenuItem>
          </Link>
        </NavbarMenuContainer>
      </NavbarContainer>
    </StyledNavbar>
  );
}

export default Navbar;
