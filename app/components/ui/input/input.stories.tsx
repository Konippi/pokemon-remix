import { SearchOutlined } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    className: "w-64",
    type: "text",
    placeholder: "Enter text...",
  },
};

export const DateInput: Story = {
  args: {
    className: "w-36",
    type: "date",
  },
};

export const Size: Story = {
  args: {
    type: "text",
    placeholder: "Filter by name...",
    startIcon: SearchOutlined,
    iconStyle: "text-gray-500",
  },
  render: (args) => (
    <div className="space-y-4">
      <Input {...args} size="sm" />
      <Input {...args} size="md" />
      <Input {...args} size="lg" />
    </div>
  ),
};
