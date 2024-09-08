import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  args: {
    imgUrl: "https://github.com/shadcn.png",
    imgAlt: "Avatar",
  },
  decorators: [],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
