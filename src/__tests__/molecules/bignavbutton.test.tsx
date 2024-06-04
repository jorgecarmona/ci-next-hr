import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BigNavButton from '../../molecules/bignavbutton';

import { IconType } from '../../atoms/icon-store';

describe('BigNavButton', () => {
    it('renders without crashing', () => {
        render(<BigNavButton 
            bgColor = '#F0F9FF'
            customColor = '#2E90FA'
            icon = {IconType.Work}
            onClickCallback = {() => {}}
            />);
    });

    it('calls onClickCallback when button is clicked', () => {
        const mockHandleClick = jest.fn();

        render(<BigNavButton 
            bgColor = '#F0F9FF'
            customColor = '#2E90FA'
            icon = {IconType.Work}
            onClickCallback = {mockHandleClick}
            subtitle = 'New Request'
            title = 'Submit'
            />);

        const button = screen.getByText('Submit'); 

        userEvent.click(button); 

        expect(mockHandleClick).toHaveBeenCalledTimes(1); 
    });
});