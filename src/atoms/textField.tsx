import {ChangeEvent} from "react";

import {TextField as MuiTextField, IconButton, InputAdornment, InputLabel } from "@mui/material";
import { iconLookup } from "./icon-store";

interface TextFieldProps{
    error?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    icon?: boolean;
    label: string;
    onChangeTextField: (value: string) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    value?: string;
}

function TextField({error,fullWidth,helperText,icon,label,onChangeTextField,placeholder,readOnly,required, value}:TextFieldProps){

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

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => onChangeTextField(e.target.value);

    return(
        <>
            <InputLabel required={false} style={{paddingLeft:"10px"}}>
                {label} {required && <span style={{color: "red"}}>*</span>}
            </InputLabel>
            <MuiTextField 
            fullWidth={fullWidth}
            style={{backgroundColor: readOnly ? "#eeeeee" : "transparent"}}
            id="TextField"
            size="small"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            InputProps={{
                startAdornment: renderEmailIcon(),
                readOnly: readOnly,
            }}
            />
        </>
    );
}
export default TextField

