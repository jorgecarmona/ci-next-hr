import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import TextField from "../../atoms/textField"

describe("TextField Component", () => {
    it('renders the label correctly', () => {
        render(<TextField label="Name" value=""
        onChangeTextField={() => {}}/>);

        const labelElement = screen.getByText(/Name/i);
        expect(labelElement).toBeInTheDocument();
    });

    it('displays the required asterisk when required is true', () => {
        render(<TextField 
            label="Email" 
            required 
            value=""
            onChangeTextField={() => {}}/>);

        const asteriskElement = screen.getByText('*');
        expect(asteriskElement).toBeInTheDocument();
        expect(asteriskElement).toHaveStyle({ color: 'red' });
});

    it("renders textfield with icon and helpertext",()=>{
        render(
            <TextField
            label="Email"
            icon={true}
            value=""
            onChangeTextField={() => {}}
            />
        )
    });

    it('does not display the icon when icon is false', () => {
        render(<TextField 
            label="Email" 
            icon={false} 
            value=""
            onChangeTextField={() => {}}/>);

        const iconElement = screen.queryByRole('button');
        expect(iconElement).toBeNull();
});

    it('displays helper text when provided', () => {
        render(<TextField 
            label="Email" 
            helperText="This is a helper text" 
            value=""
            onChangeTextField={() => {}}/>);

        const helperTextElement = screen.getByText(/This is a helper text/i);
        expect(helperTextElement).toBeInTheDocument();
});

    it('calls onChangeTextField when user enters a letter', async() => {
        const handleTextFieldChangeMock = jest.fn();

        render(
            <TextField
                label='Name'
                value=''
                onChangeTextField={handleTextFieldChangeMock}
            />
        );

        const inputElement = screen.getByLabelText('Name');
        await userEvent.type(inputElement, 'newText');
        expect(handleTextFieldChangeMock).toHaveBeenCalledTimes(7);
    });
});