// import { components } from "storybook/internal/components";
import Button from "./Button";
import { fn } from "@storybook/test";
//import { Theme } from "./Button";

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  args: {
    ...ActionsData,
  },
};

export const Primary = {
  args: {
    text: "Primary",
    //variant: Theme.Primary,
    variant: "Primary",
  },
};

export const Outline = {
  args: {
    text: "Outline",
    //variant: Theme.Outline,
    variant: "Outline",
  },
};

export const OutlineDanger = {
  args: {
    text: "Outline Danger",
    variant: "OutlineDanger",
  },
};
export const Secondary = {
  args: {
    text: "Secondary",
    variant: "Secondary",
  },
};

// import { Meta, StoryFn } from "@storybook/react";
// import Button from ".";
// import { Theme } from "./Button";
// const componentMeta = {
//   title: "Button",
//   component: Button,
//   argTypes: {},
// };

// const ButtonTemplate = (args) => <Button {...args} />;

// export const Default = ButtonTemplate.bind({});

// Primary.args = {
//   text: "My button",
//   onClick: action("onClick"),
//   variant: Theme.Primary,
// };

// Outline.args = {
//   text: "My button",
//   onClick: action("onClick"),
//   variant: Theme.Outline,
// };

// export default componentMeta;
