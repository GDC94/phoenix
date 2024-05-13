import type {Meta, StoryObj} from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger"],
      description: "Enviar"
    }
  }
};

export default meta;

//Story of users interacting with the Button component

type Story = StoryObj<typeof meta>;

// How the Button component is used in the application
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
    color: "primary",
    textColor: "white",
    weight: "extraBold"
  }
};

export const Secondary: Story = {
  args: {
    variant: "success",
    label: "Enviando",
    color: "success",
    textColor: "white",
    weight: "extraBold"
  }
};
