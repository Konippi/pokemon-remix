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

export const InputHasSmallWidth: Story = {
  args: {
    type: "text",
    placeholder: "Filter by name...",
    size: "sm",
    startIcon: SearchOutlined,
    iconStyle: "text-gray-500",
  },
};

export const InputHasMediumWidth: Story = {
  args: {
    type: "text",
    placeholder: "Filter by name...",
    size: "md",
    startIcon: SearchOutlined,
    iconStyle: "text-gray-500",
  },
};

export const InputHasLargeWidth: Story = {
  args: {
    type: "text",
    placeholder: "Filter by name...",
    size: "lg",
    startIcon: SearchOutlined,
    iconStyle: "text-gray-500",
  },
};

export const InputHasFullWidth: Story = {
  args: {
    className: "w-full",
    type: "text",
    placeholder: "Filter by name...",
    startIcon: SearchOutlined,
    iconStyle: "text-gray-500",
  },
};
