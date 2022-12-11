import {
  DeviceMediaTheme,
  DeviceTheme,
  IntervalTheme,
  LayoutTheme,
  MarginTheme,
  PaddingTheme,
  Theme,
} from "@emotion/react";

const intervals: IntervalTheme = {
  i1: "8px",
  i2: "12px",
  i3: "2rem",
  i4: "4rem",
  i5: "6rem",
  i6: "8rem",
  i7: "12rem",
  i8: "16rem",
  i9: "20rem",
  i10: "30rem",
};

// 삭제 예정
const margins: MarginTheme = {
  xs: "1rem",
  sm: "2rem",
  md: "3rem",
  lg: "4rem",
  xl: "6rem",
};

// 삭제 예정
const paddings: PaddingTheme = {
  xs: "1rem",
  sm: "2rem",
  md: "3rem",
  lg: "4rem",
  xl: "6rem",
  smcontainer: "4rem",
  mdcontainer: "6rem",
  lgcontainer: "12rem",
  pagelg: "20rem",
  pagemd: "18rem",
  pagesm: "16rem",
};

const size: DeviceTheme = {
  mobile: 768 + 80,
  container: 1200 + 80,
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device: DeviceMediaTheme = {
  mobile: `@media only screen and (max-width: ${size.mobile}px)`,
  container: `@media only screen and (max-width: ${size.container}px)`,
};

export const commonTheme: LayoutTheme = {
  margins,
  paddings,
  device,
  size,
  intervals,
};

export const theme: Theme = {
  ...commonTheme,
  color: {
    primary900: "#002519",
    primary800: "#003825",
    primary700: "#004B31",
    primary600: "#005D3E",
    primary500: "#00704A",
    primary400: "#2B8868",
    primary300: "#55A086",
    primary200: "#80B7A4",
    primary100: "#AACFC3",
    black900: "#27251F",
    black800: "#4D4D4D",
    black700: "#666666",
    black600: "#808080",
    black500: "#999999",
    black400: "#B3B3B3",
    black300: "#CCCCCC",
    black200: "#DEDEDE",
    black100: "#F2F2F2",
    white: "#FFFFFF",

    warning: "#CC4F00",
  },
  fontWeight: {
    strong: 900,
    bold: 700,
    light: 400,
  },
  padding: {
    pageLayout: "40px",
  },
  widths: {
    widePageWidth: "1440px",
    defaultPageWidth: "1280px",
  },
};
