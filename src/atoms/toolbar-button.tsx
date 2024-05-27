import {Button} from "../atoms";
import {ButtonProps} from "./button";

function ToolbarButton({children, icon, onClick, selected}: ButtonProps) {
  let underline = {};

  if (selected) {
    underline = {borderBottom: "1px solid #175CD3", paddingBottom: "8px"};
  }

  return (
    <span style={underline}>
      <Button icon={icon} onClick={onClick} selected={selected}>
        {children}
      </Button>
    </span>
  );
}

export default ToolbarButton;
