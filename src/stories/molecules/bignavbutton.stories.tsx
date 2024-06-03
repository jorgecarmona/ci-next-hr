import {Meta, StoryObj} from "@storybook/react";

import BigNavButton from "../../molecules/bignavbutton";

import {IconType} from "../../atoms/icon-store";
import {action} from "@storybook/addon-actions";

const meta = {
  title: "Molecules/BigNavButton",
  component: BigNavButton,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["no icon", ...Object.values(IconType)]
    }
  },
  tags: ["autodocs"],
  args: {
    onClickCallback: action("Button was clicked...")
  }
} satisfies Meta<typeof BigNavButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    bgColor: "#F0F9FF",
    customColor: "#2E90FA",
    icon: IconType.Work,
    onClickCallback: action("Button was clicked..."),
    subtitle: "New Request",
    title: "Submit"
  }
};

export const Learn: Story = {
  args: {
    bgColor: "#FFFAEB",
    customColor: "#F79009",
    icon: IconType.Library,
    title: "Learn"
  }
};

export const Review: Story = {
  args: {
    bgColor: "#ECFDF3",
    customColor: "#12B76A",
    icon: IconType.Article,
    subtitle: "Your Requests",
    title: "Review"
    }
};

export const Help: Story = {
  args: {
    bgColor: "#F4F3FF",
    customColor: "#7A5AF8",
    icon: IconType.Live,
    title: "Help me"
  }
};