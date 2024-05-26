import { Meta, StoryObj } from "@storybook/react";

import UnderlineLink from "../../atoms/link";

export default {
    title: 'Atoms/UnderlineLink',
    component: UnderlineLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof UnderlineLink>;

export const Primary : StoryObj<typeof UnderlineLink> = {
    args : {
        children: 'Forgot Password?',
        linkType: 'primary',
        underline: 'always'
    }
}

export const Secondary : StoryObj<typeof UnderlineLink> = {
    args : {
        children: 'Sign up',
        linkType: 'secondary',
        underline: 'hover',
    }
}

export const Default : StoryObj<typeof UnderlineLink> = {
    args : {
        children: 'Terms & Conditions',
        linkType: 'default',
        underline: 'none'
    }
}
