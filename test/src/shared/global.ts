import { createGlobalStyle, css } from "styled-components";
import UTMFont from "../assets/fonts/UTMKabelKT.ttf";

export const bodyStyles = css`
  font-family: 'Poppins', sans-serif;
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
 }
 p{
   margin: 0;
 }
`;
