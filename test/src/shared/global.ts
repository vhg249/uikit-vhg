import { createGlobalStyle, css } from "styled-components";
import UTMFont from "../assets/fonts/UTMKabelKT.ttf";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  font-family: "Nunito Sans";
`;

const fontStyle = css`
  @font-face {
    font-family: "UTMKabel";
    src: url(${UTMFont});
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontStyle}
 body {
   ${bodyStyles}
 }`;
