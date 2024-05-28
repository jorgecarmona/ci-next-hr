import { Meta, StoryObj } from "@storybook/react";

import { PasswordTextField } from "../../atoms";

const meta = {
    title: 'Atoms/PasswordTextField',
    component: PasswordTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta <typeof PasswordTextField>;

export default meta;

type Story =  StoryObj<typeof meta>;

export const Default : Story = {
    args : {
        label: "Password",
        value: "1234567",
        helperText: "Ingresa tu contraseña",
        onChangeCallback: (value) => {
        console.log("Password entered:", value);
    }
}
}

export const WithError: Story = {
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

export const WithIcon: Story = {
    args: {
        label: "Password",
        value: "1234567",
        icon: true,
        onChangeCallback: (value) => {
            console.log("Password entered:", value)
    }
}
}