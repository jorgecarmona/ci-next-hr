import {TextField as MuiTextField, IconButton, InputAdornment, InputLabel } from "@mui/material";

import { iconLookup } from "./icon-store";

interface TextFieldProps{
    label: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    icon?: boolean;
    error?: boolean;
    helperText?: string;
    fullWidth?:boolean;
    readOnly?:boolean
}
function TextField({fullWidth, label, value, required, placeholder, icon, error, helperText, readOnly}:TextFieldProps){

    const renderEmailIcon = () => {
        if (icon) {
            return (
                <InputAdornment position="start">
                    <IconButton
                        edge="start"
                    >
                    {<iconLookup.email />}
                    </IconButton>
                </InputAdornment>
            );
        }
        return null;
    };

    return(
        <>
            <InputLabel required={false} style={{paddingLeft:"10px"}}>
                {label} {required && <span style={{color: "red"}}>*</span>}
            </InputLabel>
            <MuiTextField 
            style={{paddingLeft:"10px"}}
            id="TextField"
            size="small"
            // label={label}
            value={value}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            InputProps={{
                startAdornment: renderEmailIcon(),
                readOnly: readOnly
            }}
            />
        </>
    );
}
export default TextField
