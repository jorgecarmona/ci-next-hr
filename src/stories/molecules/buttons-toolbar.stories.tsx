import type {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {fn} from "@storybook/test";

import {ButtonsToolbar} from "../../molecules";
import {IconType} from "../../atoms/icon-store";

const meta = {
  title: "Molecules/ButtonsToolbar",
  component: ButtonsToolbar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ButtonsToolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListOfButtons: Story = {
  args: {
    items: [
      {
        icon: IconType.Dashboard,
        text: "All"
      },
      {
        icon: IconType.Business,
        text: "Leaves"
      },
      {
        icon: IconType.File,
        text: "Drafts"
      },
      {
        icon: IconType.Desktop,
        text: "Accommodations"
      }
    ],
    onClick: action("button was clicked") as any,
    selectedItem: ""
  }
};

export const SelectedButton: Story = {
  args: {
    items: [
      {
        icon: IconType.Dashboard,
        text: "All"
      }
    ],
    onClick: action("button was clicked") as any,
    selectedItem: "all"
  }
};

export const NotSelectedButton: Story = {
  args: {
    items: [
      {
        icon: IconType.Dashboard,
        text: "All"
      }
    ],
    onClick: action("button was clicked") as any,
    selectedItem: ""
  }
};
