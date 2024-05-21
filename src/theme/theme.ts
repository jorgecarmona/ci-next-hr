import {createTheme} from "@mui/material";

const nextHrTheme = createTheme({
  palette: {
    primary: {
      main: "#1570EF"
    },
    secondary: {
      main: "#344054"
    },
    info: {
      main: "#B42318"
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
          color: "#475467" // Red text for text variant buttons
        },
        containedPrimary: {
          color: "#ffffff" // Ensures text color is white for primary
        },
        containedSecondary: {
          color: "#ffffff" // Ensures text color is white for secondary
        }
      }
    },
    MuiIcon: {
      styleOverrides: {
       root: {
          borderWidth: "1.10px",
          borderRadius: "50%",
          display: "inline-flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "48px", 
          height: "48px", 
          "&.delete": {
            backgroundColor: "#FEF3F2",
            color: "#D92D20",
            borderRadius: "0" 
          },
          "&.work": {
            backgroundColor: "#F0F9FF",
            color: "#2E90FA"
          },
          "&.article": {
            backgroundColor: "#FFFAEB",
            color: "#F79009"
          },
          "&.live": {
            backgroundColor: "#ECFDF3",
            color: "#12B76A"
          },
          "&.library": {
            backgroundColor: "#F4F3FF",
            color: "#7A5AF8"
          }
        }
      }
    }
  }
});

export default nextHrTheme;