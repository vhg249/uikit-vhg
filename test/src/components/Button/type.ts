import * as React from "react";

export const scales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
};

export const variants = {
  PRIMARY: "primary",
};

export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];

export interface ButtonProps {
  children?: React.ReactNode;
  scale?: Scale;
  variant?: Variant;
  disabled?: boolean;
}
