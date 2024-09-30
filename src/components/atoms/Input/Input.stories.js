import Input from "./Input";
import { fn } from "@storybook/test";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Input,
  title: "Input-text",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Small = {
  args: {
    small: true,
    label: "Small",
  },
};

export const Medium = {
  args: {
    medium: true,
    label: "Medium",
  },
};

export const Large = {
  args: {
    large: true,
    label: "Large",
  },
};
