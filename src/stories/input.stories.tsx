import type { Meta, StoryObj } from '@storybook/react';

import { InputUI } from './input';

const meta = {
  component: InputUI,
} satisfies Meta<typeof InputUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};