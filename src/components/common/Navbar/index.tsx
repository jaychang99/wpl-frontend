import { useTheme } from "@emotion/react";
import BottomSheet from "components/common/ButtomSheet";
import MenuIcon from "components/common/icons/MenuIcon";
import MobileMenu from "components/common/MobileMenu";
import {
  MobileMenuContainer,
  MobileMenuItem,
  NavbarContainer,
  NavbarLogoText,
  NavbarMenuContainer,
  StyledNavbar,
} from "components/common/Navbar/styles";
import useScrollPosition from "hooks/useScrollPosition";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import router, { Router, useRouter } from "next/router";
import React, {
  HTMLAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { eraseCookie } from "utils/cookies";
import { NavbarMenuItem } from "./styles";

interface Props extends HTMLAttributes<HTMLElement> {
  nickname?: string;
}

function Navbar({ nickname, ...props }: Props) {
  const [showMobileMenuOpen, setShowMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // for responsive design
  const {
    size: { mobile },
  } = useTheme();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width > mobile) {
        setShowMobileMenuOpen(false);
      } else {
        setShowMobileMenuOpen(true);
      }
    }
  }, [width, mobile, showMobileMenuOpen, setShowMobileMenuOpen]);

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
    <>
      {showMobileMenuOpen && (
        <BottomSheet
          isShowing={isOpen}
          onClose={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MobileMenuContainer>
            {nickname && (
              <Link href="/contribute">
                <MobileMenuItem>Contribute</MobileMenuItem>
              </Link>
            )}
            <Link href={nickname ? "#" : "/register"}>
              <MobileMenuItem
                onClick={
                  nickname
                    ? handleLogout
                    : () => {
                        router.push("register");
                      }
                }
              >
                {nickname ? "Logout" : "Register"}
              </MobileMenuItem>
            </Link>
          </MobileMenuContainer>
        </BottomSheet>
      )}
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
            {!showMobileMenuOpen && (
              <>
                {nickname && (
                  <Link href="/contribute">
                    <NavbarMenuItem>Contribute</NavbarMenuItem>
                  </Link>
                )}
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
              </>
            )}
            {showMobileMenuOpen && (
              <NavbarMenuItem
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <MenuIcon />
              </NavbarMenuItem>
            )}
          </NavbarMenuContainer>
        </NavbarContainer>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
