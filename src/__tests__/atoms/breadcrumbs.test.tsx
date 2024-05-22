import {render, screen} from "@testing-library/react";

import { BreadCrumbs } from "../../atoms";

const mockItems = [
    { label: 'Home', path: '/' },
    { label: 'Employers', path: '/employers' },
    { label: 'Company', path: '/company' },
    { label: 'Settings', path: '/settings' },
    { label: 'My Page', path: '/mypage' }
];

describe("BreadCrumbs Component", () => {
    it("renders each breadcrumb element is present on the page", () => {
        render(<BreadCrumbs separator=">" items={mockItems}/>);
        
        mockItems.forEach(item => {
            const linkElement = screen.getByText(item.label);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.getAttribute('href')).toBe(item.path);
        });
    });
    it("renders breadcrumb elements with correct text and href attributes", () => {
        render(<BreadCrumbs separator=">" items={mockItems} />);

        mockItems.forEach(item => {
            const linkElement = screen.getByText(item.label);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.getAttribute('href')).toBe(item.path);
        });
    });
});