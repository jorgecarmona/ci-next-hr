import { Meta, StoryObj } from "@storybook/react";

import TextField from "../../atoms/textField";

const meta = {
    title: 'Atoms/TextField',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} satisfies Meta <typeof TextField>; 

export default meta;

type Story =  StoryObj<typeof meta>;

export const Default : Story = {
    args : {
        label: "Name",
        value:"Massachusetts Paid Family & Medical Leave",
        fullWidth: true,
        onChangeTextField(value) {
            console.log("TextField entered:", value);
        },
    }
}

export const IconTextField: Story = {
    args: {
        label: "Email",
        value: "",
        icon: true,
        placeholder:"Enter your email here",
        onChangeTextField(value) {
            console.log("TextField entered:", value);
        },
}
}

export const ReadOnlyTextField: Story = {
    args: {
        label: "Code",
        value: "PF-ML",
        readOnly: true,
        onChangeTextField(value) {
            console.log("TextField entered:", value);
        },
}
}

export const ErrorsTextField: Story = {
    args: {
        label: "Name",
        value: "",
        error: true,
        helperText: "This field is required",
        required: true,
        onChangeTextField(value) {
            console.log("TextField entered:", value);
        },
}
}



