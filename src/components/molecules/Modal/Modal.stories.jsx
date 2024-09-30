import Modal from "./Modal";
import { fn } from "@storybook/test";
import { Provider } from "react-redux";
import { store } from "../../../store";
export const ActionsData = {
  onClick: fn(),
};
export default {
  component: Modal,
  title: "Modal",
  tags: ["autodocs"],
  args: {
    ...ActionsData,
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Primary = {
  args: {
    variant: "Primary",
  },
};
export const Outline = {
  args: {
    variant: "Outline",
  },
};
export const OutlineDanger = {
  args: {
    variant: "OutlineDanger",
  },
};
