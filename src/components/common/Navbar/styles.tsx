import styled from "@emotion/styled";
import { NAVBAR_HEIGHT } from "constants/navbar";
import { typography } from "styles/utils/typography";

export const StyledNavbar = styled.nav<{ transparent: boolean }>`
  position: fixed;

  padding: 8px 16px;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${({ theme, transparent }) =>
    transparent ? "rgba(255, 255, 255, 0)" : theme.color.primary100};

  transition: background-color 0.3s;
  z-index: 100;

  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const NavbarLogoText = styled.div`
  ${typography("default", 20, 700)};
`;

export const NavbarMenuContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const NavbarMenuItem = styled.div`
  ${typography("default", 16, 700)};
  vertical-align: center;
`;
