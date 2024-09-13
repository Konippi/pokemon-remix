import { FavoriteBorder } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    className: "bg-gray-500 hover:bg-gray-600 shadow-md text-white",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
  args: {
    value: "Click",
    size: "sm",
    icon: <FavoriteBorder fontSize="small" />,
  },
};

export const MediumButton: Story = {
  args: {
    value: "Click",
    size: "md",
    icon: <FavoriteBorder fontSize="small" />,
  },
};

export const LargeButton: Story = {
  args: {
    value: "Click",
    size: "lg",
    icon: <FavoriteBorder fontSize="medium" />,
  },
};

export const IconButton: Story = {
  args: {
    className: "bg-gray-500 hover:bg-gray-600 shadow-md rounded-full",
    size: "icon",
    icon: <FavoriteBorder fontSize="small" />,
  },
};

export const RightIconButton: Story = {
  args: {
    value: "Click",
    size: "md",
    icon: <FavoriteBorder fontSize="small" />,
    iconLocation: "right",
  },
};

export const DisabledButton: Story = {
  args: {
    value: "Click",
    size: "md",
    icon: <FavoriteBorder fontSize="small" />,
    disabled: true,
  },
};
