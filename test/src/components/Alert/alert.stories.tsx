import { Meta } from "@storybook/react/types-6-0";
import * as React from "react";
import styled from "styled-components";
import Alert from ".";

const Row = styled.div`
  margin-bottom: 32px;
`;
export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as Meta;

export const Large = () => {
  return (
    <>
      <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
        <Row>
          <Alert message="This is alert" variant="Error" size="sm"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Error" size="md"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Error" size="lg"></Alert>
        </Row>
      </div>
      <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
        <Row>
          <Alert message="This is alert" variant="Success" size="sm"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Success" size="md"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Success" size="lg"></Alert>
        </Row>
      </div>
      <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
        <Row>
          <Alert message="This is alert" variant="Warning" size="sm"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Warning" size="md"></Alert>
        </Row>
        <Row>
          <Alert message="This is alert" variant="Warning" size="lg"></Alert>
        </Row>
      </div>
    </>
  );
};
