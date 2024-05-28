import {createTheme} from "@mui/material";

const nextHrTheme = createTheme({
  palette: {
    primary: {
      main: "#1570EF"
    },
    secondary: {
      main: "#344054"
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
    MuiAvatar: {
      styleOverrides: {
        root: {
          "&.profile": {
            fontSize: "1rem",
            fontWeight: 500,
            backgroundColor: "#072136",
            color: "#FFFFFF"
          }
        }
      }
    }
  }
});

export default nextHrTheme;
