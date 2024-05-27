import { Meta, StoryObj } from "@storybook/react";

import { Grid } from "../../atoms";
import { Box, Typography } from '@mui/material';

type Story = StoryObj<typeof Grid>;

export default {
    title: 'Atoms/Grid',
    component: Grid,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} as Meta<typeof Grid>;

export const Default: Story = {
  args: {
      container: true,
      children: (
          <>
            <Grid container xs={12}>
              <Grid item xs={8} >
                <Box p={2} bgcolor="blue.300">
                      <Typography variant="body1">xs=8</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box p={2} bgcolor="grey.300" top='95px'>
                      <Typography variant="body1">xs=4</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
                <Box p={2} bgcolor="grey.300">
                    <Typography variant="body1">xs=4</Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box p={2} bgcolor="#1570EF">
                    <Typography variant="body1">xs=8</Typography>
                </Box>
            </Grid>
          </>
      ),
  }
};

export const Autolayout: Story = {
    args: {
        container: true,
        children: (
            <>
              <Grid item xs>
                  <Box p={2} bgcolor="grey.300">
                      <Typography variant="body1">xs</Typography>
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box p={2} bgcolor="grey.300">
                      <Typography variant="body1">xs=6</Typography>
                  </Box>
              </Grid>
              <Grid item xs>
                  <Box p={2} bgcolor="grey.300">
                      <Typography variant="body1">xs</Typography>
                  </Box>
              </Grid>
            </>
        ),
    }
};

export const Variablewidth: Story = {
  args: {
      container: true,
      children: (
        <>
          <Grid item xs="auto">
              <Box p={2} bgcolor="grey.300">
                  <Typography variant="body1">Variable width</Typography>
              </Box>
          </Grid>
          <Grid item xs={6}>
              <Box p={2} bgcolor="grey.300">
                  <Typography variant="body1">xs=6</Typography>
              </Box>
          </Grid>
          <Grid item xs>
              <Box p={2} bgcolor="grey.300">
                  <Typography variant="body1">xs</Typography>
              </Box>
          </Grid>
        </>
      ),
  }
};