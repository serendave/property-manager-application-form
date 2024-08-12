import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Input, { InputFieldProps } from './InputText';

const meta: Meta<InputFieldProps> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: { onChange: fn() },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'input',
    placeholder: 'Input placeholder',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Input placeholder');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello, World!');
    await expect(input).toHaveValue('Hello, World!');
  },
};
