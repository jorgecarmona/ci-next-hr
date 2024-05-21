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
    MuiCard: {
      styleOverrides: {
        root: {
          borderWidth: "1px",
          fontFamily: "Poppins, sans-serif",
          padding: "16px"
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0"
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0"
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "0",
          marginBottom: "16px"
        },
        title: {
          color: "#000000",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "20px",
          textAlign: "left"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500
        },
        body1: {
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: "1.5rem"
        },
        h1: {
          fontSize: "2.25rem",
          lineHeight: "2.75rem"
        },
        h2: {
          fontSize: "2rem",
          lineHeight: "2.5rem"
        },
        h3: {
          fontSize: "1.5rem",
          lineHeight: "2.25rem"
        },
        h4: {
          fontSize: "1.25rem",
          lineHeight: "1.875rem"
        },
        h5: {
          fontSize: "1.125rem",
          lineHeight: "1.75rem"
        },
        h6: {
          fontSize: "1rem",
          lineHeight: "1.5rem"
        }
      }
    }
  }
});

export default nextHrTheme;
