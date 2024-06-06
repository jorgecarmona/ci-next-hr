import Stack from "@mui/material/Stack";

import {ToolbarButton} from "../atoms";
import {IconType} from "../atoms/icon-store";

interface ToolbarItem {
  icon: IconType;
  text: string;
}

interface ButtonsToolbarProps {
  items: ToolbarItem[];
  onClick: (arg: string) => void;
  selectedItem: string;
}

function ButtonsToolbar({items, onClick, selectedItem}: ButtonsToolbarProps) {
  return (
    <Stack direction="row" spacing={2}>
      {items.map((item: ToolbarItem, index: number) => (
        <ToolbarButton
          icon={item.icon}
          key={index}
          onClick={() => onClick(item.text.toLowerCase())}
          selected={selectedItem === item.text.toLowerCase()}
        >
          {item.text}
        </ToolbarButton>
      ))}
    </Stack>
  );
}

export default ButtonsToolbar;
