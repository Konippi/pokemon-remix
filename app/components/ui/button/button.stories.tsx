import { Add } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    value: "Add",
  },
};

export const DisabledButton: Story = {
  args: {
    value: "Add",
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    value: "Add",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Add fontSize="small" />,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Button {...args} value="Add" iconLocation="left" />
      <Button {...args} value="Add" iconLocation="right" />
      <Button {...args} size="icon" />
      <Button {...args} size="icon" rounded="full" />
    </div>
  ),
};

export const Size: Story = {
  args: {
    icon: <Add fontSize="small" />,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Button {...args} value="Add" size="sm" />
      <Button {...args} value="Add" size="md" />
      <Button {...args} value="Add" size="lg" />
    </div>
  ),
};
