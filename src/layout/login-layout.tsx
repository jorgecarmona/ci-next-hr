import React from 'react';

import { Box, Grid } from '@mui/material';

import useIsMobile from '../hooks/use-is-mobile';

import '../styles/app.css'

function LoginLayout() {
  const isMobile = useIsMobile();

  const loginContainer = (style: string) => (
      <Box className={style}/>
  ) 

  if (isMobile) {
    return (
      <Box p={1.6875}>{loginContainer('login-container-mobile')}
        <Box className="logo-mobile" />
        {loginContainer('login-container-mobile')}
      </Box>
    )
  }

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <Grid container sx={{ height: '100%', width: '100%' }}>
        <Grid className='left-container' item xs={6} >
            <Box className="left-image" />
            <Box className="logo" />
        </Grid>
        <Grid className='right-container' item xs={6} >
            <Box className="right-image" />
        </Grid>
      </Grid>
      {loginContainer('login-container')}
    </Box>
  );
};

export default LoginLayout;