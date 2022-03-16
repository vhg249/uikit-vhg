import styled from "styled-components";
import { ButtonProps } from "./type";
import background from "../../assets/images/pink-button.png";

export const StyledButton = styled.button<ButtonProps>`
    background-color: #2172e5;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    color: white;
    background-image: url(${background});
    background-size: cover;
`;