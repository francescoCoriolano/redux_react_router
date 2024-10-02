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

export const Secondary = {
  args: {
    text: "Secondary",
    variant: "Secondary",
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

// import Button from "./Button";
// import { action } from "@storybook/addon-actions";

// const componentMeta = {
//   title: "Button",
//   component: Button,
//   argTypes: {},
// };

// const ButtonTemplate = (args) => <Button {...args} />;

// export const Primary = ButtonTemplate.bind({});
// Primary.args = {
//   text: "Primary",
//   onClick: action("onClick"),
//   variant: "Primary",
// };
// export const Secondary = ButtonTemplate.bind({});
// Primary.args = {
//   text: "Secondary",
//   onClick: action("onClick"),
//   variant: "Secondary",
// };
// export const Outline = ButtonTemplate.bind({});
// Outline.args = {
//   text: "Outline",
//   onClick: action("onClick"),
//   variant: "Outline",
// };

// export default componentMeta;
