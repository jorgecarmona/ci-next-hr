import React from "react";

import { iconLookup } from "./icon-store";
import { IconButton, InputAdornment, TextField } from "@mui/material";

interface PasswordProps {
    error?: boolean;
    errorHelperText?: string;
    fullWidth?: boolean;
    handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    icon?: boolean
    label: string;
    password: string;
}

function PasswordTextField({fullWidth = false, label, password, handlePassword, helperText, error, errorHelperText, icon}: PasswordProps) {
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
        <TextField
            fullWidth={fullWidth}
            size="small"
            type={showPassword ? "text" : "password"}
            label={label}
            value={password}
            onChange={handlePasswordChange}
            helperText={newHelperText} 
            error={Boolean(error)} 
            InputProps={{
            endAdornment: renderPasswordIcon(),
            }}
        />
    );
}

export default PasswordTextField;





