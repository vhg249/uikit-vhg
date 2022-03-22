import { Meta } from "@storybook/react/types-6-0";
import * as React from "react";
import styled from "styled-components";
import NavRight from ".";

const Row = styled.div`
  margin-bottom: 32px;
`;
export default {
  title: "Components/NavRight",
  component: NavRight,
  argTypes: {},
} as Meta;
export const Large = () => {
  return <NavRight size="lg" />;
};
export const Medium = () => {
  return <NavRight size="md" />;
};
export const Small = () => {
  return <NavRight size="sm" />;
};
