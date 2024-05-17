import React from "react";

import { iconLookup } from "./icon-store";
import { IconButton, InputAdornment, TextField, InputLabel } from "@mui/material";

interface PasswordProps {
    error?: boolean;
    errorHelperText?: string;
    fullWidth?: boolean;
    handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    icon?: boolean
    label: string;
    password: string;
    required?: boolean
}

function PasswordTextField({fullWidth = false, label, password, handlePassword, helperText, error, errorHelperText, icon, required}: PasswordProps) {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handlePassword(event);
    };

    const renderPasswordIcon = () => {
        if (icon) {
            return (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <iconLookup.visibilityoff /> : <iconLookup.visibility />}
                    </IconButton>
                </InputAdornment>
            );
        }
        return null;
    };

    let newHelperText = helperText;

    if (error) {
        newHelperText = errorHelperText;
    }

    return (
        <>
            <InputLabel required={false} >
                {label} {required && <span style={{color: "red"}}>*</span>}
            </InputLabel>
            <TextField
                fullWidth={fullWidth}
                size="small"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                helperText={newHelperText} 
                error={Boolean(error)} 
                required={required}
                InputProps={{
                endAdornment: renderPasswordIcon(),
                }}
            />
        </>
    );
}

export default PasswordTextField;





