import { Meta, StoryObj } from "@storybook/react";
import NavItem from "../../molecules/navItem";
import { IconType } from "../../atoms/icon-store";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'Molecules/NavItem',
    component: NavItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        icon: {
            control: "select",
            options: ["no icon", ...Object.values(IconType)], 
            }
    },
    args: {
        selected: false,
        onClickCallBack: action("Button was clicked...")
    }
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>

export const Reports : Story = {
    args : {
        icon: IconType.TrendingUp,
        title: "REPORTS",
        onClickCallBack: action("Button was clicked...")
    }
}

export const Account : Story = {
    args : {
        icon: IconType.Person,
        title: "ACCOUNT",
    }
}

export const Admin : Story = {
    args : {
        icon: IconType.Settings,
        title: "ADMIN",
        selected: true
    }
}