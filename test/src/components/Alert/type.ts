import { MouseEvent, ReactNode } from "react";

export const variants = {
  DANGER: "Error",
  SUCCESS: "Success",
  WARNING: "Warning",
} as const;
export type Variants = typeof variants[keyof typeof variants];

export interface AlertProps {
  variant?: Variants;
  message: string;
  children?: ReactNode;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
