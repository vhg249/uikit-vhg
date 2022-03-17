import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./type";
import background from "../../assets/images/pink-button.png";

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};
export default Button;
