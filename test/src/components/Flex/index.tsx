import * as React from "react";
import { StyledFlex } from "./style";
import { FlexProps } from "./type";

const Flex = (props: FlexProps) => {
  const { children, ...rest } = props;

  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
