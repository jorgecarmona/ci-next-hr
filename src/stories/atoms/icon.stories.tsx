import {Meta, StoryObj} from "@storybook/react";

import {Icon} from "../../atoms";

export default {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
} as Meta<typeof Icon>;

export const Help: StoryObj<typeof Icon> = {
  args: {
    name: "help",
    className: "help",
    style: {fontSize: 40}
  }
};

export const Notifications: StoryObj<typeof Icon> = {
  args: {
    name: "notifications",
    style: {fontSize: 40},
    hasNotifications: true
  }
};

export const Delete: StoryObj<typeof Icon> = {
  args: {
    name: "delete",
    style: {fontSize: 40}
  }
};

export const Work: StoryObj<typeof Icon> = {
  args: {
    name: "work",
    style: {fontSize: 40}
  }
};

export const Article: StoryObj<typeof Icon> = {
  args: {
    name: "article",
    style: {fontSize: 40}
  }
};

export const Live: StoryObj<typeof Icon> = {
  args: {
    name: "live",
    style: {fontSize: 40}
  }
};

export const Library: StoryObj<typeof Icon> = {
  args: {
    name: "library",
    style: {fontSize: 40}
  }
};
