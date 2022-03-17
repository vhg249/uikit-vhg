import styled from "styled-components";
import { IFlex } from "./type";

export const StyledFlex = styled.div<IFlex>`
    display: flex;
    justify-content: ${(p) => p.justify};
    align-items: ${(p) => p.align};
    flex-direction: ${(p) => p.direction};
    gap: ${(p) => p.gap};
`;