import React from 'react';

import { Autocomplete as MuiAutocomplete, InputLabel, TextField} from '@mui/material';
interface OptionType {
  label: string;
  value: string;
}
interface AutocompleteProps {
  error?: boolean;
  errorHelperText?: string;
  helperText?: string;
  id: string;
  label?: string;
  options: OptionType[];
  required?: boolean;
  value: string;
}

function Autocomplete ({ error, errorHelperText, helperText, id, label, options, required, value}: AutocompleteProps) {
  const [inputValue, setInputValue] = React.useState(value);

  let newHelperText = helperText;

  if (error) {
    newHelperText = errorHelperText;
  }

  return (
    <>
      <InputLabel required={false} style={{paddingLeft:"10px"}}>
        {label} {required && <span style={{color: "red"}}>*</span>}
      </InputLabel>
      <MuiAutocomplete
        size="small"
        id={id}
        options={options}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            helperText={newHelperText} 
            error={Boolean(error)} 
            variant="outlined"
          />
        )}
      />
    </>
  );
};

export default Autocomplete;