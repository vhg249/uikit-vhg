import * as React from "react";
import Button from ".";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

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
