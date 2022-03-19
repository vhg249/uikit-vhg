import * as React from "react";

export interface IFlex {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  customStyle?: string;
}

export interface FlexProps extends IFlex {
  children?: React.ReactNode;
}
