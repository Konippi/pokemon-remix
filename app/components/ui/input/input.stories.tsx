import { SearchOutlined } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    className: "focus:border-blue-300",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const DateInput: Story = {
  args: {
    type: "date",
  },
};

export const WithSearchIcon: Story = {
  args: {
    type: "text",
    placeholder: "Filter by name...",
    wsize: "full",
    startIcon: SearchOutlined,
    iconStyle: "text-gray-500",
  },
};
