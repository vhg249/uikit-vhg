import * as React from "react";
import Button from ".";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { scales } from "./type";
import Flex from "../Flex";

export default {
  title: "Button component",
  component: Button,
  argTypes: {
    scale: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Hello' };

export const Size: React.FC = () => {
  return(
    <>
      <Flex align="center" gap="20px">
        {Object.values(scales).map((scale) => (
          <Button scale={scale} key={scale}>Button</Button>
        ))}  
      </Flex>
    </>
  )
}
