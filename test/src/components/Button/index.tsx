import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./type";

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <StyledButton>{children}</StyledButton>;
};
export default Button;
