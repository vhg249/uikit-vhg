import { Meta } from "@storybook/react/types-6-0";
import * as React from "react";
import styled from "styled-components";
import Alert from "./Alert";

const Row = styled.div`
  margin-bottom: 32px;
`;
export default {
    title: "Components/Alert",
    component: Alert,
    argTypes: {},
  } as Meta;

export const Default = () => {
    return(
        <div style={{ padding: "32px", width: "400px" }}>
          <Row>
            <Alert message="This is alert" variant="Error"></Alert>
          </Row>
          <Row>
            <Alert message="This is alert" variant="Success"></Alert>
          </Row>
          <Row>
            <Alert message="This is alert" variant="Warning"></Alert>
          </Row>
          </div>
    )
}
export const WidthIcon = () => {
  return(
      <div style={{ padding: "32px", width: "400px" }}>
        <Row>
          <Alert message="This is alert" variant="Error"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Success"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Warning"></Alert>
        </Row>
        </div>
  )
}


