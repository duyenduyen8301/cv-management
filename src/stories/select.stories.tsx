import type { Meta, StoryObj } from '@storybook/react';

import { SelectUI } from './select';

const meta = {
  component: SelectUI,
} satisfies Meta<typeof SelectUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};