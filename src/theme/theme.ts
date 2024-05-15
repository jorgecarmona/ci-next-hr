// Theme.tsx
import {createTheme} from "@mui/material";

const nextHrTheme = createTheme({
  palette: {
    primary: {
      main: "#1570EF"
    },
    secondary: {
      main: "#344054"
    },
    success: {
      main: "#027A48" 
    },
    error: {
      main: "#b42318" 
    },
    warning: {
      main: "#FFA000" 
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightMedium: 400
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.tertiary": {
            backgroundColor: "#F0F9FF",
            color: "#1849A9",
            "&:hover": {
              backgroundColor: "#D0E7FF"
            }
          },
          "&.selected": {
            color: "#1849A9",
            fontWeight: 500
          }
        },
        outlined: {
          backgroundColor: "#FFFFFF",
          borderColor: "#D0D5DD",
          color: "#344054",
          "&:hover": {
            backgroundColor: "rgba(208, 213, 221, 0.04)",
            borderColor: "#B0B5BD"
          }
        },
        text: {
          color: "#475467" 
        },
        containedPrimary: {
          color: "#ffffff" 
        },
        containedSecondary: {
          color: "#ffffff" 
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          borderWidth:"1.10px",
          "&.pending": {
            backgroundColor: "#EFF8FF",
            color: "#175CD3"
          },
          "&.open": {
            backgroundColor: "#F4F3FF",
            color: "#5925DC"
          },
          "&.approved": {
            backgroundColor: "#ECFDF3",
            color: "#027A48"
          },
          "&.denied": {
            backgroundColor: "#FEF3F2",
            color: "#b42318"
          },
          "&.enabled": {
            borderColor: "#027A48", 
            color: "#027a48" 
          },
          "&.rejected": {
            borderColor: "#D92D20", 
            color: "#D92D20" 
          },
          "&.disabled": {
            borderColor: "#E7A63F", 
            color: "#E7A63F" 
          },
          "&.default": {
            backgroundColor: "#EAECF0",
            color: "#000000"
          }
        }
      }
    },
  }
});

export default nextHrTheme;
