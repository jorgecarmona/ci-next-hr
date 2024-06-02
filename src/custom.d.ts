import "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
      paper: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      light?: string;
      main?: string;
      dark?: string;
      contrastText?: string;
      paper?: string;
    };
  }
}
