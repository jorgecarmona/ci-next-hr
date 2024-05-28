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
        linkType: 'primary',
        underline: 'always'
    }
}

export const Secondary : StoryObj<typeof Link> = {
    args : {
        children: 'Sign up',
        linkType: 'secondary',
        underline: 'hover',
    }
}

export const Default : StoryObj<typeof Link> = {
    args : {
        children: 'Terms & Conditions',
        linkType: 'primary',
        underline: 'none'
    }
}
