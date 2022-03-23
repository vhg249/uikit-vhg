import { Meta } from "@storybook/react/types-6-0";
import * as React from "react";
import styled from "styled-components";
import Footer from ".";

const Row = styled.div`
  margin-bottom: 32px;
`;
export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
} as Meta;

export const Large = () => {
    return (
        // <div>huy</div>
        <Footer />
    )
}