import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { scales, variants } from "../Button/type";
import Flex from "../Flex";
import Button from ".";

export default {
  title: "Components/StripeButton",
  component: Button,
  argTypes: {
    scale: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Hello" };

export const Size: React.FC = () => {
  return (
    <>
      {Object.values(variants).map((variant) => (
        <Flex key={variant} align="center" gap="20px" customStyle="margin-bottom: 20px">
          {Object.values(scales).map((scale) => (
            <Button scale={scale} key={scale} variant={variant}>
              Button
            </Button>
          ))}
        </Flex>
      ))}
    </>
  );
};
