import React from "react";

import {Badge, Icon as MuiIcon, IconProps as MuiIconProps} from "@mui/material";

import {iconLookup} from "./icon-store";

interface IconProps extends MuiIconProps {
  name: "article" | "business" | "delete" | "help" | "live" | "library" | "notifications" | "work";
  hasNotifications?: boolean;
  shape?: "circle" | "square";
}

function Icon({color, name, hasNotifications, shape, ...props}: IconProps) {
  const effectiveShape = name === "delete" ? "square" : shape;

  const iconProps: MuiIconProps = {
    ...props,
    className: `${props.className || ""} ${name}`,
    style: {
      ...(props.style || {}),
      ...(effectiveShape === "circle" ? {borderRadius: "50%"} : {})
    }
  };

  const IconComponent = iconLookup[name];

  if (!IconComponent) {
    return null;
  }

  if (hasNotifications) {
    return (
      <>
        <MuiIcon>
          <Badge variant="dot" color="error" overlap="circular">
            <IconComponent />
          </Badge>
        </MuiIcon>
      </>
    );
  }

  return (
    <MuiIcon {...iconProps} data-testid="name">
      <IconComponent />
    </MuiIcon>
  );
}

export default Icon;
