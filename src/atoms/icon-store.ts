import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export enum IconType {
  Add = "add",
  Article = "article",
  Business = "business",
  Delete = "delete",
  Email = "email",
  Forward = "forward",
  Help = "help",
  Library = "library",
  Live = "live",
  Notifications = "notifications",
  Visibility = "visibility",
  VisibilityOff = "visibilityoff",
  Work = "work"
}

export const iconLookup: Record<IconType, typeof AddOutlinedIcon> = {
  add: AddOutlinedIcon,
  article: ArticleOutlinedIcon,
  business: WorkOutlineOutlinedIcon,
  delete: DeleteOutlinedIcon,
  email: EmailOutlinedIcon,
  forward: KeyboardDoubleArrowRightOutlinedIcon,
  help: HelpOutlineOutlinedIcon,
  library: LocalLibraryOutlinedIcon,
  live: LiveHelpOutlinedIcon,
  notifications: NotificationsNoneOutlinedIcon,
  visibility: VisibilityOutlinedIcon,
  visibilityoff: VisibilityOffOutlinedIcon,
  work: WorkOutlineOutlinedIcon
};
