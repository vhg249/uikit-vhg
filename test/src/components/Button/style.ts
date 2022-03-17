import styled, { ThemedStyledFunction } from "styled-components";
import { ButtonProps, IButton, scales } from "./type";

const getStyledScale = (scale: string) => {
  if (scale === scales.LG)
    return `
        width: 370px;
    `;
  else if (scale === scales.MD)
    return `
        width: 180px;
    `;
};

export const StyledButton = styled.div<IButton>`
  position: relative;
  ${(p) => getStyledScale(p.scale)};

  & > img {
    width: 100%;
  }
  & > p{
      font-family: 'UTMKabel';
  }
`;
