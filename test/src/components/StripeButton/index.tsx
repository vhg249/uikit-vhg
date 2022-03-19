import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps, variants } from "../Button/type";
import PrimaryBg from "../../assets/images/select-button.png";
import PrimaryBgActive from "../../assets/images/select-button-active.png";
import SecondaryBg from "../../assets/images/submit-button.png";
import SecondaryBgActive from "../../assets/images/submit-button-active.png";

const StripeButton = (props: ButtonProps) => {
  const { label, scale, children, disabled, variant, ...rest } = props;
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [bgButton, setBgButton] = React.useState(PrimaryBg);
  const [bgButtonActive, setBgButtonActive] = React.useState(PrimaryBgActive);

  React.useEffect(() => {
    getVariantImage(variant);
  }, [])
  

  const getVariantImage = (variant: string) => {
    switch (variant) {
      case variants.SECONDARY:
        setBgButton(SecondaryBg);
        setBgButtonActive(SecondaryBgActive);
        break;
      default:
        setBgButton(PrimaryBg);
        setBgButtonActive(PrimaryBgActive);
        break;
    }
  }

  return (
    <StyledButton
      scale={scale}
      variant={variant}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      disabled={disabled}
    >
      <img src={isActive ? bgButtonActive : bgButton} />
      <p>{children}</p>
    </StyledButton>
  );
};
export default StripeButton;
