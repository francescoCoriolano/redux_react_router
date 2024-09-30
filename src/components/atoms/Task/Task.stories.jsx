import { fn } from "@storybook/test";

import Task from "./Task";
import { components } from "storybook/internal/components";

//what is this?
//Actions help you verify interactions when building UI components
//in isolation. Oftentimes you won't have access to the functions and
//state you have in context of the app. Use fn() to stub them in.
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

//component --> the component itself
//title --> how to group or categorize the component in the Storybook sidebar
//tags --> to automatically generate documentation for our components
//excludeStories --> additional information required by the story but should not be rendered in Storybook
//args --> define the action args that the component expects to mock out the custom events
export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  //what is this below?
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
