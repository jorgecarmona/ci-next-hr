import { Meta, StoryObj } from "@storybook/react";
import NavItem from "../../molecules/navItem";
import { IconType } from "../../atoms/icon-store";

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
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>

export const Reports : Story = {
    args : {
        icon: IconType.TrendingUp,
        title: "REPORTS",
        onClickCallBack: (value) => {
            console.log('Click button:', value);
        },
    }
}

export const Account : Story = {
    args : {
        icon: IconType.Person,
        title: "ACCOUNT",
        onClickCallBack: (value) => {
            console.log('Click button:', value);
        },
    }
}

export const Admin : Story = {
    args : {
        icon: IconType.Settings,
        title: "ADMIN",
        onClickCallBack: (value) => {
            console.log('Click button:', value);
        },
        selected: true
    }
}