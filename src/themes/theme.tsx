import { DefaultTheme, FlattenSimpleInterpolation } from "styled-components";

export const theme: DefaultTheme = {
  lightGrayColor: "#F5F5F5",
  grayColor: "#757575",
  darkGrayColor: "#424242",
  linkColor: "#008BB1",
  whiteColor: "#fff",
  orangeColor: "#EEB111",
  breakpoints: {
    tablet: (styles: FlattenSimpleInterpolation) =>
      `@media (min-width: 600px) {${styles}}`,
    desktop: (styles: FlattenSimpleInterpolation) =>
      `@media (min-width: 1025px) {${styles}}`,
  },
};
