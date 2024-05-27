import React from "react";

import {Avatar as MuiAvatar, AvatarProps as MuiAvatarProps} from "@mui/material";

interface AvatarProps extends MuiAvatarProps {
  alt?: string;
  children?: React.ReactNode;
  height?: number;
  // src?: string;
  type?: "profile";
  width?: number;
}

function Avatar({alt, children, height, src, type, width}: AvatarProps) {
  if (type === "profile" && !children) {
    console.error("The 'children' property is required when type is 'profile'.");
  }

  return (
    <MuiAvatar alt={alt} src={src} sx={{width, height}} style={{background: type?"#072136":undefined}}>
      {type === "profile" ? children : null}
    </MuiAvatar>
  );
}

export default Avatar;


// import React from 'react';
// import {Avatar as MuiAvatar, AvatarProps as MuiAvatarProps} from "@mui/material";
// import theme from "../theme/theme"

// interface AvatarProps extends MuiAvatarProps {
//   alt?: string;
//   children?: React.ReactNode;
//   className?: string;
//   height: number;
//   src?: string;
//   type?: 'profile';
//   width: number;
// };

// function Avatar({ alt, children, className, height, src, type, width}:AvatarProps){

//   if (type === 'profile') {
//     return (
//       <MuiAvatar className={className} height={height} width={width} >
//         {children}
//       </MuiAvatar>
//     );
//   }

//   return (
//     <MuiAvatar alt={alt} className={className} height={height} src={src} width={width} >
//       {children}
//     </MuiAvatar>
//   );
// };

// export default Avatar;