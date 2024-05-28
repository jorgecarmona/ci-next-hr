import {Button} from "../atoms";
import {ButtonProps} from "./button";

function ToolbarButton({children, icon, onClick, selected}: ButtonProps) {
  let newStyles = selected ? {borderBottom: "1px solid #175CD3", padding: "8px 0"} : {padding: "8px 0"};

  return (
    <span style={newStyles}>
      <Button icon={icon} onClick={onClick} selected={selected}>
        {children}
      </Button>
    </span>
  );
}

export default ToolbarButton;
