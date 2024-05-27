import React, { ReactNode } from 'react';
import { Grid as MuiGrid } from '@mui/material';

interface GridProps {
  container?: boolean;
  children?: ReactNode;
  item?: boolean;
  xs?: number | 'auto' | boolean;
}

function Grid({ container, children, item, xs }: GridProps) {
  return (
    <MuiGrid container={container} item={item} xs={xs} >
      {children}
    </MuiGrid>
  );
};

export default Grid;