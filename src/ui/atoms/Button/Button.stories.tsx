import type {Meta, StoryObj} from "@storybook/react";

import {ThemeProvider} from "@emotion/react";

import {theme} from "../../../styles";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ],
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
    textColor: "dark",
    weight: "extraBold"
  }
};

export const Secondary: Story = {
  args: {
    variant: "success",
    label: "Enviando",
    color: "secondary",
    textColor: "dark",
    weight: "extraBold"
  }
};
