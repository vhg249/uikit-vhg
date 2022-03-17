import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./type";
import background from "../../assets/images/pink-button.png";

const Button = (props: ButtonProps) => {
  const { label, ...rest } = props;
  
  return (
    <StyledButton scale="lg">
      <img src={background} />
      <p>{label}</p>
    </StyledButton>
  );
};
export default Button;
