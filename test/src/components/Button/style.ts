import styled from "styled-components";
import { IButton, scales } from "./type";

export const StyledButton = styled.button<IButton>`
  position: relative;
  cursor: pointer;
  height: fit-content;
  padding: 0;
  border: none;
  background: transparent;
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
  ${(p) => getDisabledStyle(p.disabled)};
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
const getDisabledStyle = (disabled: boolean) => {
  if(disabled === false) return `filter: grayscale(100%);`
}
