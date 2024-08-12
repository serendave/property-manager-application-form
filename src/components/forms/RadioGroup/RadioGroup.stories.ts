import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup, { RadioGroupProps } from './RadioGroup';
import { expect, within } from '@storybook/test';

const meta: Meta<RadioGroupProps> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    value: '1',
    name: 'radio-group',
    direction: 'row',
    items: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    direction: 'row',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioGroup = canvas.getByRole('radiogroup');
    await expect(radioGroup).toBeInTheDocument();
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};
