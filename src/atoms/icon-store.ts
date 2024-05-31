import {
  AccessTimeOutlined,
  AddOutlined,
  ArticleOutlined,
  DashboardOutlined,
  DeleteOutlined,
  DescriptionOutlined,
  DesktopWindowsOutlined,
  HelpOutlineOutlined,
  KeyboardDoubleArrowRightOutlined,
  LiveHelpOutlined,
  LocalLibraryOutlined,
  EmailOutlined,
  NotificationsNoneOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  WorkOutlineOutlined
} from "@mui/icons-material";

export enum IconType {
  Add = "add",
  Article = "article",
  Business = "business",
  Dashboard = "dashboard",
  Delete = "delete",
  Desktop = "desktop",
  Email = "email",
  File = "file",
  Forward = "forward",
  Help = "help",
  Library = "library",
  Live = "live",
  Notifications = "notifications",
  Time = "time",
  Visibility = "visibility",
  VisibilityOff = "visibilityoff",
  Work = "work"
}

export const iconLookup: Record<IconType, typeof AddOutlined> = {
  add: AddOutlined,
  article: ArticleOutlined,
  business: WorkOutlineOutlined,
  dashboard: DashboardOutlined,
  delete: DeleteOutlined,
  desktop: DesktopWindowsOutlined,
  email: EmailOutlined,
  file: DescriptionOutlined,
  forward: KeyboardDoubleArrowRightOutlined,
  help: HelpOutlineOutlined,
  library: LocalLibraryOutlined,
  live: LiveHelpOutlined,
  notifications: NotificationsNoneOutlined,
  time: AccessTimeOutlined,
  visibility: VisibilityOutlined,
  visibilityoff: VisibilityOffOutlined,
  work: WorkOutlineOutlined
};
