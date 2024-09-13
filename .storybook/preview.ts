import type { Preview } from "@storybook/react";
import "../app/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default preview;
