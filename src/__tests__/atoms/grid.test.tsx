// Grid.test.tsx
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Grid } from '../../atoms';


describe('Grid component', () => {
  test('renders children correctly', () => {
    render(<Grid>Test Child</Grid>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('applies container prop correctly', () => {
    render(<Grid container />);
    const muiGrid = screen.getByRole('grid');
    expect(muiGrid).toHaveAttribute('class', expect.stringContaining('MuiGrid-container'));
  });

  test('applies item prop correctly', () => {
    render(<Grid item />);
    const muiGrid = screen.getByRole('gridcell');
    expect(muiGrid).toHaveAttribute('class', expect.stringContaining('MuiGrid-item'));
  });

  test('applies xs prop correctly when it is a number', () => {
    render(<Grid xs={6} />);
    const muiGrid = screen.getByRole('gridcell');
    expect(muiGrid).toHaveAttribute('class', expect.stringContaining('MuiGrid-grid-xs-6'));
  });

  test('applies xs prop correctly when it is "auto"', () => {
    render(<Grid xs="auto" />);
    const muiGrid = screen.getByRole('gridcell');
    expect(muiGrid).toHaveAttribute('class', expect.stringContaining('MuiGrid-grid-xs-auto'));
  });

  test('applies xs prop correctly when it is true', () => {
    render(<Grid xs />);
    const muiGrid = screen.getByRole('gridcell');
    expect(muiGrid).toHaveAttribute('class', expect.stringContaining('MuiGrid-grid-xs-true'));
  });

  test('renders without crashing when no props are provided', () => {
    render(<Grid />);
    const muiGrid = screen.getByRole('grid');
    expect(muiGrid).toBeInTheDocument();
  });
});
