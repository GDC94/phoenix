import type { Meta, StoryObj } from '@storybook/react'

import { toast } from './'

const meta: Meta<typeof toast> = {
  title: 'Atoms/toast',
  component: toast,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}