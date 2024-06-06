import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NavItem } from "../../molecules";

import { IconType } from "../../atoms/icon-store";

describe('NavItem', () => {
    const mockOnClickCallBack = jest.fn();

    it('renders without crashing', () => {
        render(
            <NavItem
                icon={IconType.TrendingUp}
                title="REPORTS"
                onClickCallBack={mockOnClickCallBack}
                selected
            />);
    });

    it('renders the correct title', () => {
    render(
        <NavItem 
        icon={IconType.Settings}
        title="ADMIN"
        onClickCallBack={mockOnClickCallBack}
        />);

        expect(screen.getByText('ADMIN')).toBeInTheDocument();
    });

    it('calls onClickCallback when button is clicked', () => {
        render(
            <NavItem 
                icon={IconType.Person}
                title="ACCOUNT"
                selected
                onClickCallBack={mockOnClickCallBack}
            />);

        const button = screen.getByText('ACCOUNT'); 
        userEvent.click(button); 
        expect(mockOnClickCallBack).toHaveBeenCalledTimes(1); 
    });
});