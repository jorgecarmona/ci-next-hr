import { Meta, StoryObj } from "@storybook/react";

import TextField from "../../atoms/textField";

export default {
    title: 'Atoms/TextField',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta <typeof TextField>;

export const Default : StoryObj<typeof TextField> = {
    args : {
        label: "Name",
        value:"Massachusetts Paid Family & Medical Leave",
        fullWidth: true
    }
}

export const IconTextField: StoryObj<typeof TextField> = {
    args: {
        label: "Email",
        value: "",
        icon: true,
        placeholder:"Enter your email here"
}
}

export const ReadOnlyTextField: StoryObj<typeof TextField> = {
    args: {
        label: "Code",
        value: "PF-ML",
        readOnly: true
}
}

export const ErrorsTextField: StoryObj<typeof TextField> = {
    args: {
        label: "Name",
        value: "",
        error: true,
        helperText: "This field is required",
        required: true
}
}



