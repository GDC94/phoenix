import type {Meta, StoryObj} from "@storybook/react";

import {Button} from "./";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
