import { Meta, StoryObj } from "@storybook/react";

import BigNavButton from "../../molecules/bignavbutton";

const meta = {
    title: 'Molecules/BigNavButton',
    component: BigNavButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta <typeof BigNavButton>;

export default meta;

type Story =  StoryObj<typeof meta>;

export const Submit : Story = {
    args : {
        bgColor: '#F0F9FF',
        customColor: '#2E90FA',
        icon: 'work',
        onClickCallback: (value) => {
            console.log('Click button:', value);
        },
        subtitle: 'New Request',
        title: 'Submit' 
    }
}

export const Learn : Story = {
    args : {
        bgColor: '#FFFAEB',
        customColor: '#F79009',
        icon: 'library',
        onClickCallback: (value) => {
            console.log('Click button:', value);
        },
        title: 'Learn' 
    }
}

export const Review : Story = {
    args : {
        bgColor: '#ECFDF3',
        customColor: '#12B76A',
        icon: 'article',
        onClickCallback: (value) => {
            console.log('Click button:', value);
        },
        subtitle: 'Your Requests',
        title: 'Review' 
    }
}

export const Help : Story = {
    args : {
        bgColor: '#F4F3FF',
        customColor: '#7A5AF8',
        icon: 'live',
        onClickCallback: (value) => {
            console.log('Click button:', value);
        },
        title: 'Help me' 
    }
}