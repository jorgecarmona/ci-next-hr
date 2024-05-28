import React from 'react';
import { Grid as MuiGrid, Grid2Props as MuiGridProps } from '@mui/material';

interface GridProps extends MuiGridProps {
  container?: boolean;
  children?: React.ReactNode;
  item?: boolean;
}

function Grid({ container, children, item }: GridProps) {

  return (
    <MuiGrid container={container} item={item} >
        {children}
    </MuiGrid>
  );
};

export default Grid;