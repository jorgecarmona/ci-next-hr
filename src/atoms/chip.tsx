
// Chip.tsx
import React from 'react';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

export type ChipType = 'pending' | 'open' | 'approved' | 'outlined' | 'denied' | 'default' | 'enabled' | 'disabled' | 'rejected';

interface ChipProps extends Omit<MuiChipProps, 'color' | 'onDelete' | 'onClick'> {
  type?: ChipType;
  label: string;
  onDelete?: () => void;
  onClick?: () => void;
}

function Chip({ type = 'default', label, onDelete, onClick, ...rest }: ChipProps) {
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
      {...rest}
      label={label}
      color={color}
      variant={variant}
      onDelete={onDelete}
      onClick={onClick}
    />
  );
}

export default Chip;
