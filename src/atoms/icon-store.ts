import {
  AddOutlined,
  KeyboardDoubleArrowRightOutlined,
  LocalLibraryOutlined,
  Visibility,
  VisibilityOff,
  WorkOutlineOutlined
} from "@mui/icons-material";

export enum IconType {
  Add = "add",
  Business = "business",
  Forward = "forward",
  Library = "library",
  Visibility = "visibility",
  VisibilityOff = "visibilityoff"
}

export const iconLookup: Record<IconType, typeof AddOutlined> = {
  add: AddOutlined,
  business: WorkOutlineOutlined,
  forward: KeyboardDoubleArrowRightOutlined,
  library: LocalLibraryOutlined,
  visibility: Visibility,
  visibilityoff: VisibilityOff,
};
