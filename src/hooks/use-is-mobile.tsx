import {useMediaQuery, Theme} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const useIsMobile = (): boolean => {
  const theme: Theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile;
};

export default useIsMobile;
