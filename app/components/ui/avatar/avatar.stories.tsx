import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  args: {
    fallbackTxt: "P",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImg: Story = {
  args: {
    imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    imgAlt: "Avatar",
  },
};

export const WithImgAndBgColor: Story = {
  args: {
    imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    imgAlt: "Avatar",
    className: "bg-gray-200",
  },
};

export const SizeVariants: Story = {
  args: {
    className: "bg-gray-200",
    imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    imgAlt: "Avatar",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Avatar {...args} size="xs" />
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="xl" />
    </div>
  ),
};

export const ShapeVariants: Story = {
  args: {
    className: "bg-gray-200",
    imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    imgAlt: "Avatar",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Avatar {...args} shape="circle" />
      <Avatar {...args} shape="square" />
    </div>
  ),
};
