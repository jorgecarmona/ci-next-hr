import type {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {fn} from "@storybook/test";

import {ToolbarButton} from "../../atoms";
import {IconType} from "../../atoms/icon-store";

const meta = {
  title: "Atoms/ToolbarButton",
  component: ToolbarButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    children: "Default Text",
    icon: IconType.Add,
    onClick: fn(),
    selected: false
  }
} satisfies Meta<typeof ToolbarButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultToolbarButton: Story = {
  args: {
    children: "Default",
    icon: IconType.Library,
    onClick: action("button was clicked") as any
  }
};

export const SelectedToolbarButton: Story = {
  args: {
    children: "Selected",
    icon: IconType.Library,
    onClick: action("button was clicked") as any,
    selected: true
  }
};
