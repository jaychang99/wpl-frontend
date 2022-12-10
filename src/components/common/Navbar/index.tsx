import {
  NavbarContainer,
  NavbarLogoText,
  NavbarMenuContainer,
  StyledNavbar,
} from "components/common/Navbar/styles";
import useScrollPosition from "hooks/useScrollPosition";
import Link from "next/link";
import router, { Router, useRouter } from "next/router";
import React, { HTMLAttributes, MouseEvent, useCallback } from "react";
import { eraseCookie } from "utils/cookies";
import { NavbarMenuItem } from "./styles";

interface Props extends HTMLAttributes<HTMLElement> {
  nickname?: string;
}

function Navbar({ nickname, ...props }: Props) {
  const { scrollY } = useScrollPosition();
  const router = useRouter();

  const handleLogout = useCallback((e: MouseEvent) => {
    e.preventDefault();
    async function handleEvent() {
      eraseCookie("wts_web_token");
      window.location.href = "/";
    }
    handleEvent();
  }, []);

  return (
    <StyledNavbar transparent={scrollY === 0} {...props}>
      <NavbarContainer>
        <Link href="/">
          <NavbarLogoText>WTS</NavbarLogoText>
        </Link>
        <NavbarMenuContainer>
          <Link href={nickname ? "#" : "/login"}>
            <NavbarMenuItem>
              {nickname ? "Welcome, " + nickname : "Login"}
            </NavbarMenuItem>
          </Link>
          <Link href={nickname ? "#" : "/register"}>
            <NavbarMenuItem
              onClick={
                nickname
                  ? handleLogout
                  : () => {
                      router.push("register");
                    }
              }
            >
              {nickname ? "Logout" : "Register"}
            </NavbarMenuItem>
          </Link>
        </NavbarMenuContainer>
      </NavbarContainer>
    </StyledNavbar>
  );
}

export default Navbar;
