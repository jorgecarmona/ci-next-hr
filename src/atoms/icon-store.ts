import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export enum IconType {
  Add = "add",
  Business = "business",
  Forward = "forward",
  Library = "library"
}

export const iconLookup: Record<IconType, typeof AddOutlinedIcon> = {
  add: AddOutlinedIcon,
  business: WorkOutlineOutlinedIcon,
  forward: KeyboardDoubleArrowRightOutlinedIcon,
  library: LocalLibraryOutlinedIcon
};
