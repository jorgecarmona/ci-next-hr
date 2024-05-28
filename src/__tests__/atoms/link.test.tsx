import {render, screen} from "@testing-library/react";

import Link from "../../atoms/link";

describe("Link Component Unit Test", () => {
    it("should render the Link with correct children", () => {
        render(
            <Link linkType="primary" underline="always">
                Forgot Password?
            </Link>
    );
    const linkElement = screen.getByText('Forgot Password?');
    expect(linkElement).toBeInTheDocument();
});

    it("should render the Link with primary style and no underline", () => {
        render(
            <Link linkType="primary" underline="none">
                Terms & Conditions
            </Link>
    );
    const linkElement = screen.getByText('Terms & Conditions');
    expect(linkElement).toBeInTheDocument();
});

    it("should render the secondary Link with additional text", () => {
        render(
            <Link linkType="secondary" underline="hover">
                Sign up
            </Link>
    );
    const spanElement = screen.getByText("Don't have an account?");
    const linkElement = screen.getByText('Sign up');
    expect(spanElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    });
});