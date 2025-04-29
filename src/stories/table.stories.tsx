import type { Meta, StoryObj } from '@storybook/react';

import { TableUI } from './table';

const meta = {
  component: TableUI,
} satisfies Meta<typeof TableUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};