import React from 'react';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

export type ChipType = 'pending' | 'open' | 'approved' | 'outlined' | 'denied' | 'default' | 'enabled' | 'disabled' | 'rejected';

interface ChipProps extends Omit<MuiChipProps, 'color' | 'onDelete' | 'onClick'> {
  label: string;
  onClick?: () => void;
  // onDelete?: () => void;
  type?: ChipType;
}

function Chip({ label, onClick,  type = 'default', ...rest }: ChipProps) {
  let color: "primary" | "secondary" | undefined = undefined;
  let variant: "filled" | "outlined" = "filled";

  switch (type) {
    case 'pending':
    case 'approved':
      color = 'primary';
      break;
    case 'open':
    case 'denied':
      color = 'secondary';
      break;
    case 'enabled':
    case 'rejected':
    case 'disabled':
      color = 'primary';
      variant = 'outlined';
      break;
  }

  return (
    <MuiChip
      className={type}
      color={color}
      label={label}
      onClick={onClick}
      // onDelete={onDelete}
      variant={variant}
      {...rest}
    />
  );
}

export default Chip;
