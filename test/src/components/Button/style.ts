import styled, { ThemedStyledFunction } from "styled-components";
import { ButtonProps, IButton, scales } from "./type";

export const StyledButton = styled.div<IButton>`
  position: relative;
  cursor: pointer;
  height: fit-content;
  & > img {
    width: 100%;
    height: 100%;
  }
  & > p {
    font-family: "UTMKabel";
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    color: white;
    text-align: center;
  }

  ${(p) => getStyledScale(p.scale)};
`;

const getStyledScale = (scale: string) => {
  switch (scale) {
    case scales.LG:
      return `
          width: 370px;
          height: 51px;
          p{
              font-size: 24px;
          }
      `;
    case scales.MD:
      return `
          width: 180px;
          height: 40px;
          p{
              font-size: 18px;
          }
      `;
    default:
      return `
          width: 107px;
          height: 25px;
          p{
              font-size: 14px;
              top: 9%;
          }
      `;
  }
};
