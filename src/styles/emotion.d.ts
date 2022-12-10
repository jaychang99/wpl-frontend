import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
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
}
