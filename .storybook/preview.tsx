import React from "react";

import {ThemeProvider} from "@mui/material/styles";
import nextHrTheme from "../src/theme/theme";

// Function to apply the theme to all stories
const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={nextHrTheme}>
    <style>
      {`
        .innerZoomElementWrapper {
          width: 500px; // Set the width for the specific class
        }

        .sb-show-main.sb-main-centered #storybook-root {
          padding: 0 !important;
          max-height: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 500px;
        }
      `}
    </style>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i
    }
  }
};
