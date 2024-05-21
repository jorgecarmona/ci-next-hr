import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


export enum IconType {
  Add = "add",
  Article = "article",
  Business = "business",
  Delete = "delete",
  Forward = "forward",
  Help = "help",
  Library = "library",
  Live = "live",
  Notifications = "notifications",
  Work = "work"
}

export const iconLookup: Record<IconType, typeof AddOutlinedIcon> = {
  add: AddOutlinedIcon,
  article: ArticleOutlinedIcon,
  business: WorkOutlineOutlinedIcon,
  delete: DeleteOutlinedIcon,
  forward: KeyboardDoubleArrowRightOutlinedIcon,
  help: HelpOutlineOutlinedIcon,
  library: LocalLibraryOutlinedIcon,
  live: LiveHelpOutlinedIcon,
  notifications: NotificationsNoneOutlinedIcon,
  work: WorkOutlineOutlinedIcon
};
