import styled from "@emotion/styled";
import { resetButtonStyle } from "styles/utils/button";
import { hexToRgba } from "styles/utils/color";
import { customScrollbar } from "styles/utils/customScrollbar";
import { flexCenterStyle } from "styles/utils/layout";

const PADDING = 20;

export const DimmedArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => hexToRgba(theme.color.black900, 0.1)};

  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 600px;
  min-height: 305px;
  max-height: 600px;
  padding: 0 ${PADDING}px;

  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${PADDING}px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.black300};
  color: ${({ theme }) => theme.color.primary500};
  font-weight: 700;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  ${resetButtonStyle};
  ${flexCenterStyle};

  width: 24px;
  height: 24px;

  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.color.black100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.black300};
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: ${PADDING}px 0;
  overflow-y: scroll;

  ${({ theme }) => customScrollbar(theme)}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;

  margin: 0 -${PADDING}px;
  padding: 10px;

  background-color: ${({ theme }) => theme.color.black100};
`;
