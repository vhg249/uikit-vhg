import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./type";
import PrimaryBg from "../../assets/images/pink-button.png";
import PrimaryBgActive from "../../assets/images/pink-button-active.png";
import DisabledButton from "../../assets/images/button-disable.png";

const Button = (props: ButtonProps) => {
  const { label, scale, children, ...rest } = props;
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <StyledButton
      scale={scale}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img src={isActive ? PrimaryBgActive : PrimaryBg} />
      <p>{children}</p>
    </StyledButton>
  );
};
export default Button;
