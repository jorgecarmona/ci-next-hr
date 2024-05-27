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
    it("renders breadcrumb elements with correct text and href attributes", () => {
        render(<BreadCrumbs separator=">" items={mockItems} />);

        mockItems.forEach(item => {
            const linkElement = screen.getByText(item.label);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.getAttribute('href')).toBe(item.path);
        });
    });
    
    it('renders item with no path', () => {
        const itemsWithNoPath = [
            { label: 'Home' },
            { label: 'About', path: '/about' },
        ];
        render(<BreadCrumbs separator=">" items={itemsWithNoPath} />);
        const linkElementWithoutPath = screen.getByText('Home');
        
        expect(linkElementWithoutPath).toBeInTheDocument();
        expect(linkElementWithoutPath.getAttribute('href')).toBe('#');
    });

    it('renders without items', () => {
        const { container } = render(<BreadCrumbs separator=">" items={[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('uses default separator when none is provided', () => {
        render(<BreadCrumbs items={mockItems} />);

        const breadcrumbsContainer = screen.getByTestId('breadcrumbs-container');
        expect(breadcrumbsContainer.textContent).toContain('>');

        mockItems.forEach(item => {
            const linkElement = screen.getByText(item.label);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.getAttribute('href')).toBe(item.path);
        });
    });

    it('renders custom separator correctly', () => {
        const separator = '>';
        render(<BreadCrumbs separator={separator} items={mockItems} />);
        const breadcrumbsContainer = screen.getByTestId('breadcrumbs-container');

        expect(breadcrumbsContainer.textContent).toContain(separator);
    });
});