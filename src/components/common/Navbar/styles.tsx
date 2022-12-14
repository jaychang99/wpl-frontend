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
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: ${({ theme }) =>
    `calc(${theme.padding.pageLayout} * 2 + ${theme.widths.defaultPageWidth})`};
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

// MOBILE
export const MobileMenuContainer = styled.div`
  padding: 20px 0 100px;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const MobileMenuItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.black300};
  padding: 16px;
  ${typography("default", 20, 400)};
`;
