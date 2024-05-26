import {render, screen} from "@testing-library/react";

import UnderlineLink from "../../atoms/link";

describe("UnderlineLink Component Unit Test", () => {
    it("should render the UnderlineLink with correct children", () => {
        render(
            <UnderlineLink linkType="primary" underline="always">
                Forgot Password?
            </UnderlineLink>
    );
    const linkElement = screen.getByText('Forgot Password?');
    expect(linkElement).toBeInTheDocument();
});

    it("should render the secondary UnderlineLink with additional text", () => {
        render(
            <UnderlineLink linkType="secondary" underline="hover">
                Sign up
            </UnderlineLink>
    );
    const spanElement = screen.getByText("Don't have an account?");
    const linkElement = screen.getByText('Sign up');
    expect(spanElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    });
});