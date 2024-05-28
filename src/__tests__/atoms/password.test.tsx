import { render, screen } from "@testing-library/react";

import PasswordTextField from "../../atoms/password-textfield";

import userEvent from "@testing-library/user-event";

describe("PasswordTextField", () => {
    it("renders without crashing", () => {
        render(
            <PasswordTextField
            label="Password"
            value=""
            onChangeCallback={() => {}}
        />
    );
});
    it("renders type default", () => {
        render(
            <PasswordTextField
            label="Password"
            value=""
            onChangeCallback={() => {}}
            helperText="ingresa tu contraseña"
            fullWidth
        />); 
        const Label = screen.getByText('Password');
        expect(Label).toBeInTheDocument(); 

        const HelperText = screen.getByText('ingresa tu contraseña');
        expect(HelperText).toBeInTheDocument(); 
});
    it("renders password with error", () => {
        render(
            <PasswordTextField
            label="Password"
            value=""
            onChangeCallback={() => {}}
            error
            errorHelperText="Usuario o contraseña incorrectas"
            fullWidth
        />
    );
    const Label = screen.getByText('Password');
    expect(Label).toBeInTheDocument(); 

    const errorHelperText = screen.getByText('Usuario o contraseña incorrectas');
    expect(errorHelperText).toBeInTheDocument();
});
    it("renders password with icon", async() => {
        render(
            <PasswordTextField
            label="Password"
            value=""
            onChangeCallback={() => {}}
            helperText="ingresa tu contraseña"
            icon={true}
            fullWidth
        />
    );
    const toggleButton = screen.getByLabelText("toggle password visibility");

    await userEvent.click(toggleButton);

    expect(toggleButton).toBeInTheDocument();
});
    it('calls onChangeCallback when user enters password', async() => {
        const handlePasswordMock = jest.fn();
        const newPassword = 'hola';
    
        render(
            <PasswordTextField
                label='Password'
                value=''
                onChangeCallback={handlePasswordMock}
            />
        );

        const inputElement = screen.getByLabelText('Password');

        await userEvent.type(inputElement,newPassword)
    
        expect(handlePasswordMock).toHaveBeenCalledTimes(4);
    });
});
