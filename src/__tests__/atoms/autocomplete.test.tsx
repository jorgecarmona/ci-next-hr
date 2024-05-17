import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from '../../atoms';

describe('Testing for the Autocomplete component', () => {
  const options = [
    { label: 'English', value: 'english' },
    { label: 'City of Residence', value: 'cityOfResidence' },
    { label: 'City of Residence', value: 'cityOfResidence' },
  ];

  test('should render without errors', () => {
    render(<Autocomplete id="autocomplete" options={options} value="" />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('should show help text when there is no error', () => {
    render(<Autocomplete id="autocomplete" options={options} value="" helperText="Help Text" />);
    expect(screen.getByText('Help Text')).toBeInTheDocument();
  });

  test('should show error text when there is an error', () => {
    render(
      <Autocomplete
        id="autocomplete"
        options={options}
        value=""
        error
        errorHelperText="Error message"
      />
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('must allow the user to write in the input field', () => {
    render(<Autocomplete id="autocomplete" options={options} value="" />);
    userEvent.type(screen.getByRole('combobox'), 'Opción 1');
    expect(screen.getByRole('combobox')).toHaveValue('Opción 1');
  });

  test('should change the input value when an option is selected', () => {
    render(<Autocomplete id="autocomplete" options={options} value="" />);
    const input = screen.getByRole('combobox');
    userEvent.type(input, 'English'); // Simula escribir para activar el autocompletar
    const option = screen.getByText('English'); // Encuentra la opción que deseas seleccionar
    userEvent.click(option); // Simula hacer clic en la opción
    expect(input).toHaveValue('English');
  });
  
});
