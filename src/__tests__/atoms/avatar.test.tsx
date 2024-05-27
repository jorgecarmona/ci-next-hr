import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '../../atoms/avatar';

describe('Avatar component', () => {
  test('renders without crashing', () => {
    render(<Avatar alt="test avatar" src="test.png" />);
    const avatarElement = screen.getByRole('img', { name: /test avatar/i });
    expect(avatarElement).toBeInTheDocument();
  });

  test('applies width and height styles', () => {
    const { getByRole } = render(<Avatar alt="test avatar" src="test.png" width={50} height={50} />);
    const avatarElement = getByRole('img');
    expect(avatarElement).toHaveStyle('width: 50px');
    expect(avatarElement).toHaveStyle('height: 50px');
  });

  test('displays children when type is "profile"', () => {
    const { getByText } = render(
      <Avatar alt="test avatar" type="profile">
        Profile Child
      </Avatar>
    );
    expect(getByText('Profile Child')).toBeInTheDocument();
  });

  test('throws error when type is "profile" and children are not provided', () => {
    console.error = jest.fn();
    render(<Avatar alt="test avatar" type="profile" />);
    expect(console.error).toHaveBeenCalledWith("The 'children' property is required when type is 'profile'.");
  });

  test('applies default background color when type is "profile"', () => {
    const { getByRole } = render(
      <Avatar alt="test avatar" type="profile">
        Profile Child
      </Avatar>
    );
    const avatarElement = getByRole('img');
    expect(avatarElement).toHaveStyle('background: #072136');
  });

  test('does not display children when type is not "profile"', () => {
    const { queryByText } = render(
      <Avatar alt="test avatar" type="default">
        Should not be displayed
      </Avatar>
    );
    expect(queryByText('Should not be displayed')).not.toBeInTheDocument();
  });
});