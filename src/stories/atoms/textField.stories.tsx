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

export const Primary : StoryObj<typeof TextField> = {
    args : {
        label: "",
        value:"",
        placeholder:"",
        helperText:"",
    }
}


