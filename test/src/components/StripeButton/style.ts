import styled from "styled-components";
import { IButton, scales, variants } from "../Button/type";

export const StyledButton = styled.button<IButton>`
  position: relative;
  cursor: pointer;
  height: fit-content;
  padding: 0;
  border: none;
  background: transparent;

  &:hover {
    filter: drop-shadow(0px 0px 6px #00ccff);
  }
  & > img {
    width: 100%;
    height: 100%;
  }
  & > p {
    font-family: "UTMKabel";
    position: absolute;
    top: 29%;
    left: 0;
    width: 100%;
    text-align: center;
  }

  ${(p) => getStyledScale(p.scale)};
  ${(p) => getDisabledStyle(p.disabled)};
  ${(p) => getVariantStyle(p.variant)};
`;

const getStyledScale = (scale: string) => {
  switch (scale) {
    case scales.LG:
      return `
        width: 168px;
        height: 78px;
        p{
          font-size: 24px;
        }
      `;
    case scales.MD:
      return `
        width: 130px;
        height: 54px;
        p{
          font-size: 20px;
          top: 24%;
        }
      `;
    default:
      return `
        width: 74px;
        height: 35px;
        p{
            font-size: 12px;
            top: 25%;
        }
      `;
  }
};
const getDisabledStyle = (disabled: boolean) => {
  if (disabled === true) return `filter: grayscale(100%);`;
};
const getVariantStyle = (variant: string) => {
  switch (variant) {
    case variants.PRIMARY:
      return `
        color: #D61F1F;
        text-shadow: 1px 1px 0px #FFFFFF;
    `;
    case variants.SECONDARY:
      return `
        color: #FFFFFF;
        text-shadow: 1px 1px 0px #2D2A67;
    `;
    default:
      return `
        color: #D61F1F;
        text-shadow: 1px 1px 0px #FFFFFF;
    `;
  }
};
