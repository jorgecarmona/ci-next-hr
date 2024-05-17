import React from 'react';

import { Autocomplete as MuiAutocomplete, TextField, InputLabel} from '@mui/material';

interface OptionType {
  label: string;
  value: string;
}

interface AutocompleteProps {
  value: string;
  id: string;
  options: OptionType[];
  required?: boolean;
  helperText?: string;
  error?: boolean;
  errorHelperText?: string;
  label?: string; 
}



function Autocomplete ({ value, id, options, helperText, error, errorHelperText, required, label}: AutocompleteProps) {
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