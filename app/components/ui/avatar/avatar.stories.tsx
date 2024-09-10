import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  args: {
    fallbackTxt: "P",
  },
  decorators: [],
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
    className: "bg-gray-100",
  },
};
