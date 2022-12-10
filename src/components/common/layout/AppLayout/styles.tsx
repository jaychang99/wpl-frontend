import styled from "@emotion/styled";
import { NAVBAR_HEIGHT } from "constants/navbar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${NAVBAR_HEIGHT}px;
  min-height: 100vh;
  margin: 0 40px;
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
