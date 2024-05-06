import React from "react";

import {Button as MuiButton, ButtonProps as MuiButtonProps} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

interface ButtonProps extends Omit<MuiButtonProps, "color" | "variant"> {
  buttonType?: "primary" | "secondary" | "outlined" | "tertiary";
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: "add" | "forward" | "business" | "library";
}

const iconLookup = {
  add: AddOutlinedIcon,
  forward: KeyboardDoubleArrowRightOutlinedIcon,
  business: WorkOutlineOutlinedIcon,
  library: LocalLibraryOutlinedIcon
};

function Button({buttonType, children, disabled = false, fullWidth = false, icon}: ButtonProps) {
  let Icon = icon ? iconLookup[icon] : null;

  return (
    <MuiButton variant="contained" disabled={disabled} fullWidth={fullWidth} startIcon={Icon ? <Icon /> : null}>
      {children}
    </MuiButton>
  );
}

export default Button;
