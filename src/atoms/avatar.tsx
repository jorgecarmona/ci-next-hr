import React from "react";

import {Avatar as MuiAvatar, AvatarProps as MuiAvatarProps} from "@mui/material";

interface AvatarProps extends MuiAvatarProps {
  alt?: string;
  children?: React.ReactNode;
  height?: number;
  src?: string;
  type?: "profile" | "image" | undefined;
  width?: number;
}

function Avatar({alt, children, height, src, type, width}: AvatarProps) {
  if (type === "profile" && !children) {
    console.error("The 'children' property is required when type is 'profile'.");
  }

  return (
    <MuiAvatar src={src} sx={{width, height}}>
      {type === "profile" ? children : null}
    </MuiAvatar>
  );
}

export default Avatar;
