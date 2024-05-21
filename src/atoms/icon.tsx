import React from 'react';


import { Badge, Icon as MuiIcon, IconProps as MuiIconProps } from '@mui/material';

import { iconLookup } from './icon-store';

interface IconProps extends MuiIconProps {
  name: 'article' | 'business' | 'delete' | 'help' | 'live' | 'library' | 'notifications' | 'work';
  hasNotifications?: boolean;
  shape?: 'circle' | 'square';
}

function Icon ({ color, name, hasNotifications, shape, ...props }:IconProps) {
  
  const effectiveShape = name === 'delete' ? 'square' : shape;

  const iconProps: MuiIconProps = { 
    ...props, 
    className: `${props.className || ''} ${name}`,
    style: { 
      ...(props.style || {}), 
      ...(effectiveShape === 'circle' ? { borderRadius: '50%' } : {}) 
    } 
  };

  const IconComponent = iconLookup[name];

  if (!IconComponent) {
    return null;
  }

  if (hasNotifications && name === 'notifications') {
    return (
      <div style={{ position: 'relative', display: 'inline-flex' }}>
      <MuiIcon {...iconProps}>
        <IconComponent />
      </MuiIcon>
      <Badge 
        variant="dot" 
        color="info" 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        <span />
      </Badge>
    </div>
    );
  }

  return (
    <MuiIcon {...iconProps}>
      <IconComponent />
    </MuiIcon>
  );
};

export default Icon;