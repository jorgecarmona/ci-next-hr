import { render, screen } from "@testing-library/react";

import PasswordTextField from "../../atoms/textfield-password";
import userEvent from "@testing-library/user-event";

describe("PasswordTextField", () => {
    it("renders without crashing", () => {
        render(
            <PasswordTextField
            label="Password"
            password=""
            handlePassword={() => {}}
        />
    );
});

    it("renders type default", () => {
        render(
            <PasswordTextField
            label="Password"
            password=""
            handlePassword={() => {}}
            helperText="ingresa tu contraseña"
            fullWidth
        />); 
        const Label = screen.getByLabelText('Password');
        expect(Label).toBeInTheDocument(); 

        const HelperText = screen.getByText('ingresa tu contraseña');
        expect(HelperText).toBeInTheDocument(); 
});

    it("renders password with error", () => {
        render(
            <PasswordTextField
            label="Password"
            password=""
            handlePassword={() => {}}
            error
            errorHelperText="Usuario o contraseña incorrectas"
            fullWidth
        />
    );
    const Label = screen.getByLabelText('Password');
    expect(Label).toBeInTheDocument(); 

    const errorHelperText = screen.getByText('Usuario o contraseña incorrectas');
    expect(errorHelperText).toBeInTheDocument();
    
});

    it("renders password with icon", async() => {
        render(
            <PasswordTextField
            label="Password"
            password="ingeniero"
            handlePassword={() => {}}
            helperText="ingresa tu contraseña"
            icon={true}
            fullWidth
        />
    );
    const toggleButton = screen.getByLabelText("toggle password visibility");

    await userEvent.click(toggleButton);

    expect(toggleButton).toBeInTheDocument();
});
});
