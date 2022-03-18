import { Meta } from "@storybook/react/types-6-0";
import * as React from "react";
import styled from "styled-components";
import { Social } from ".";

const Row = styled.div`
  margin-bottom: 32px;
`;
export default {
  title: "Components/Social",
  component: Social,
  argTypes: {},
} as Meta;

export const Large = () => {
  return (
    <>
      <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
        <Social size="lg" />
      </div>
    </>
  );
};
export const Medium = () => {
  return (
    <>
      <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
        <Social size="md" />
      </div>
    </>
  );
};
export const Small = () => {
  return (
    <>
      <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
        <Social size="sm" />
      </div>
    </>
  );
};
