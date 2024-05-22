import { render, screen } from "@testing-library/react"

import TextField from "../../atoms/textField"

describe("TextField Component", () => {
    it('renders the label correctly', () => {
        render(<TextField label="Name" />);
        const labelElement = screen.getByText(/Name/i);
        expect(labelElement).toBeInTheDocument();
    });
});
    it('displays the required asterisk when required is true', () => {
        render(<TextField label="Email" required />);
        const asteriskElement = screen.getByText('*');
        expect(asteriskElement).toBeInTheDocument();
        expect(asteriskElement).toHaveStyle({ color: 'red' });
});
    it("renders textfield with icon and helpertext",()=>{
        render(
            <TextField
            label="Email"
            icon={true}
            />
        )
    });
    it('does not display the icon when icon is false', () => {
        render(<TextField label="Email" icon={false} />);
        const iconElement = screen.queryByRole('button');
        expect(iconElement).toBeNull();
});

    it('displays helper text when provided', () => {
        render(<TextField label="Email" helperText="This is a helper text" />);
        const helperTextElement = screen.getByText(/This is a helper text/i);
        expect(helperTextElement).toBeInTheDocument();
});
