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
      options: ["ghost", "solid"],
      description: "Enviar"
    },
    color: {
      options: ["blue", "green", "red", "purple"]
    },
    onClick: {
      action: "Button clicked"
    }
  }
};

export default meta;

//Story of users interacting with the Button component

type Story = StoryObj<typeof meta>;

// How the Button component is used in the application
export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost",
    color: "blue",
    weight: "bold"
  }
};

export const Solid: Story = {
  args: {
    variant: "solid",
    label: "Solid",
    color: "green",
    weight: "bold"
  }
};

export const Light: Story = {
  args: {
    variant: "light",
    label: "Light",
    color: "purple",
    weight: "bold"
  }
};

export const Flat: Story = {
  args: {
    variant: "flat",
    label: "Flat",
    color: "red",
    weight: "bold"
  }
};

export const Faded: Story = {
  args: {
    variant: "faded",
    label: "Faded",
    color: "yellow",
    weight: "bold"
  }
};
