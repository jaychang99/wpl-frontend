import styled from "@emotion/styled";

export const StyledMainCurrentQuietPlaceSection = styled.section`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const MainCurrentQuietPlaceContainer = styled.div`
  display: grid;
  gap: 36px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.intervals.i3};

  ${({ theme }) => theme.device.container} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.device.mobile} {
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.intervals.i2};
  }
`;
