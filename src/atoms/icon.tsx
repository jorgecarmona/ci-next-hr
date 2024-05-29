import { Badge, Icon as MuiIcon, IconProps as MuiIconProps} from "@mui/material";
import { iconLookup } from "./icon-store";

interface IconProps extends MuiIconProps {
  bgColor?: string;
  customColor?: string; 
  hasNotifications?: boolean;
  name: "article" | "business" | "delete" | "help" | "live" | "library" | "notifications" | "work";
  shape?: "circle" | "square";
}

function Icon({ bgColor, customColor = '#344054', hasNotifications, name, shape, ...props}: IconProps){
  const effectiveShape = name === "delete" ? "square" : shape;
  const iconProps: MuiIconProps = {
    ...props,
    className: `${props.className || ""} ${name}`,
    style: {
      ...(props.style || {}),
      ...(effectiveShape === "circle" ? {borderRadius: "50%"} : {}),
      ...(effectiveShape === "square" ? {borderRadius: "20%"} : {}),
      backgroundColor: bgColor, 
      color: customColor
    }
  };
  const IconComponent = iconLookup[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist in iconLookup`);
    return null;
  }
  if (hasNotifications) {
    return (
      <MuiIcon {...iconProps}>
        <Badge variant="dot" color="error" overlap="circular" anchorOrigin={{vertical:"top", horizontal:"right"}}>
          <IconComponent />
        </Badge>
      </MuiIcon>
    );
  }
  
  return (
      <MuiIcon {...iconProps} data-testid="name" 
        sx={{display: "inline-flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: "48px", 
        height: "48px",}}>
        <IconComponent />
      </MuiIcon>
  );
}

export default Icon;