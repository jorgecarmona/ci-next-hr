import React from "react";

import {Avatar as MuiAvatar, AvatarProps as MuiAvatarProps} from "@mui/material";

interface ProfileAvatarProps extends MuiAvatarProps {
  alt?: never;
  children: React.ReactNode;
  height?: never;
  src?: never;
  type: "profile";
  width?: never;
}

interface DefaultAvatarProps extends MuiAvatarProps {
  alt: string;
  children?: never;
  height?: number;
  src: string;
  type?: undefined;
  width?: number;
}

type AvatarProps = ProfileAvatarProps | DefaultAvatarProps;

function Avatar(props: ProfileAvatarProps): JSX.Element;
function Avatar(props: DefaultAvatarProps): JSX.Element;

function Avatar({alt, children, height = 400, src, type, width = 400}: AvatarProps) {
  const sxProps = type === "profile" ? {} : {width, height};
  const classname = type === "profile" ? "profile" : "";

  return (
    <MuiAvatar alt={alt} src={src} sx={sxProps} className={classname}>
      {type === "profile" ? children : null}
    </MuiAvatar>
  );
}

export default Avatar;
