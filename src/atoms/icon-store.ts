import {
  AddOutlined,
  ArticleOutlined,
  DeleteOutlined, 
  HelpOutlineOutlined ,
  KeyboardDoubleArrowRightOutlined, 
  LiveHelpOutlined,
  LocalLibraryOutlined,
  EmailOutlined,
  NotificationsNoneOutlined, 
  Person2Outlined,
  SettingsOutlined,
  TrendingUpOutlined,
  VisibilityOutlined, 
  VisibilityOffOutlined,
  WorkOutlineOutlined
} from "@mui/icons-material";

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
  Person2 = "person2",
  Settings = "settings",
  TrendingUp = "trendingup",
  Visibility = "visibility",
  VisibilityOff = "visibilityoff",
  Work = "work"
}

export const iconLookup: Record<IconType, typeof AddOutlined> = {
  add: AddOutlined,
  article: ArticleOutlined,
  business: WorkOutlineOutlined,
  delete: DeleteOutlined,
  email: EmailOutlined,
  forward: KeyboardDoubleArrowRightOutlined,
  help: HelpOutlineOutlined,
  library: LocalLibraryOutlined,
  live: LiveHelpOutlined,
  notifications: NotificationsNoneOutlined,
  person2: Person2Outlined,
  settings: SettingsOutlined,
  trendingup: TrendingUpOutlined,
  visibility: VisibilityOutlined,
  visibilityoff: VisibilityOffOutlined,
  work: WorkOutlineOutlined
};
