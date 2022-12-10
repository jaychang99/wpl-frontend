import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends LayoutTheme {
    color: {
      primary900: string;
      primary800: string;
      primary700: string;
      primary600: string;
      primary500: string;
      primary400: string;
      primary300: string;
      primary200: string;
      primary100: string;

      black900: string;
      black800: string;
      black700: string;
      black600: string;
      black500: string;
      black400: string;
      black300: string;
      black200: string;
      black100: string;

      white: string;

      warning: string;
    };
    fontWeight: {
      strong: number; //900
      bold: number; // 700
      light: number; // 400
    };
    padding: {
      pageLayout: string;
    };
    widths: {
      widePageWidth: string;
      defaultPageWidth: string;
    };
  }

  export interface DeviceTheme {
    mobile: number;
    container: number;
  }

  export interface DeviceMediaTheme {
    mobile: string;
    container: string;
  }
  export interface IntervalTheme {
    i1: string;
    i2: string;
    i3: string;
    i4: string;
    i5: string;
    i6: string;
    i7: string;
    i8: string;
    i9: string;
    i10: string;
  }

  export interface SizeTheme {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
  export type MarginTheme = SizeTheme;

  interface PaddingTheme extends SizeTheme {
    smcontainer: string;
    mdcontainer: string;
    lgcontainer: string;
    pagelg: string;
    pagemd: string;
    pagesm: string;
  }

  export interface LayoutTheme {
    margins: MarginTheme;
    paddings: PaddingTheme;
    device: DeviceMediaTheme;
    size: DeviceTheme;
    intervals: IntervalTheme;
  }
}
