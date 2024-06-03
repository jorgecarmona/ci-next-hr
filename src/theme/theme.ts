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
      main: "#B42318"
    },
    warning: {
      main: "#FFA000"
    },
    custom: {
      paper: "#FCFCFD"
    },
    info: {
      main: "#FFFFFF",
      light: "#F0F9FF",
      contrastText: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightMedium: 400
  },
  components: {
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
    },
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
          color: "#FFFFFF"
        },
        containedSecondary: {
          color: "#FFFFFF"
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
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          borderWidth: "1.10px",
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
            color: "#B42318"
          },
          "&.enabled": {
            borderColor: "#027A48",
            color: "#027A48"
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
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
          fontWeightMedium: 400,
          fontSize: "16px",
          lineHeight: "21px"
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
