import React from "react";
import { Grid } from "../atoms";
import { Box } from "@mui/material";
interface LayoutProps{
  Header: React.ReactNode;
}

function NavToolBarLayout ({Header}:LayoutProps){
    return(

       <Box style={{display: "flex"}}>

          <Grid className="navtool-container" container xs={12} >
            <Grid className="logo-container" xs={5}>Logo</Grid>
                <Grid xs={3}>{Header}</Grid>
                <Grid xs={1}>Home</Grid>
                <Grid xs={1}>Reports</Grid>
                <Grid xs={1}>Admin</Grid>
                <Grid xs={1}>Account</Grid>
                
          </Grid>
        </Box>
    )
};

export default NavToolBarLayout;