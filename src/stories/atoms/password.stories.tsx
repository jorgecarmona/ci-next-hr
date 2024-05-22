import { Meta, StoryObj } from "@storybook/react";

import PasswordTextField from "../../atoms/textfield-password";

export default {
    title: 'Atoms/PasswordTextField',
    component: PasswordTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof PasswordTextField>;

export const Default : StoryObj<typeof PasswordTextField> = {
    args : {
        label: "Password",
        value: "1234567",
        helperText: "Ingresa tu contraseña",
        onChangeCallback: (value) => {
        console.log("Password entered:", value);
    }
}
}

export const WithError: StoryObj<typeof PasswordTextField> = {
    args: {
        label: "Password",
        value: "1234567",
        error: true,
        required: true,
        errorHelperText:'Usuario o contraseña incorrectas',
        onChangeCallback: (value) => {
            console.log("Password entered:", value)
    }
}
}

export const WithIcon: StoryObj<typeof PasswordTextField> = {
    args: {
        label: "Password",
        value: "1234567",
        icon: true,
        onChangeCallback: (value) => {
            console.log("Password entered:", value)
    }
}
}