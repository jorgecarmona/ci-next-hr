import React from "react";

import {Avatar as MuiAvatar, AvatarProps as MuiAvatarProps} from "@mui/material";

interface AvatarProps extends MuiAvatarProps {
  alt?: string;
  children?: React.ReactNode;
  height?: number;
  src?: string;
  type?: "profile";
  width?: number;
}

function Avatar({alt, children, height, src, type, width}: AvatarProps) {
  if (type === "profile" && !children) {
    console.error("The 'children' property is required when type is 'profile'.");
  }

  const sxProps = type === "profile" ? {} : { width, height };

  return (
    <MuiAvatar
      alt={alt}
      src={src}
      sx={sxProps}
      style={{ background: type ? "#072136" : undefined }}
    >
      {type === "profile" ? children : null}
    </MuiAvatar>
  );
}

export default Avatar;