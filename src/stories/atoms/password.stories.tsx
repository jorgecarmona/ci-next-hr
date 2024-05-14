import { Meta, StoryObj } from "@storybook/react";

import PasswordTextField from "../../atoms/textfield-password";

export default {
    title: 'Atoms/PasswordTextField',
    component: PasswordTextField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta <typeof PasswordTextField>;

export const Primary : StoryObj<typeof PasswordTextField> = {
    args : {
        label: "",
        helperText: "",
        password: "",
        handlePassword: (event) => {
        console.log("Password entered:", event.target.value);
    }
}
}

