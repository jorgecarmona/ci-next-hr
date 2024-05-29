import { Meta, StoryObj } from "@storybook/react";

import Link from "../../atoms/link";

export default {
    title: 'Atoms/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof Link>;

export const Primary : StoryObj<typeof Link> = {
    args : {
        children: 'Forgot Password?',
        underline: 'always'
    }
}

export const Secondary : StoryObj<typeof Link> = {
    args : {
        children: 'Sign up',
        underline: 'hover',
    }
}

export const Default : StoryObj<typeof Link> = {
    args : {
        children: 'Terms & Conditions',
        underline: 'none'
    }
}
