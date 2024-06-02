import React from 'react';

import { Box, Grid } from '@mui/material';

import useIsMobile from '../hooks/use-is-mobile';
import nextHrTheme from '../theme/theme';

import '../styles/app.css';

import logo from '../assets/images/logo.svg';
import avatarFamily from '../assets/images/avatar-family.svg';
import avatarFather from '../assets/images/avatar-father.svg';

function LoginLayout() {
  const isMobile = useIsMobile();
  const { palette } = nextHrTheme;

  const mobileStyles = {
    backgroundColor: palette.info.main,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '96vh',
    marginTop: '82px',
    width: '100%',
  };

  const mobileLogo = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '48.25px',
    left: '32px',
    position: 'absolute',
    top: '26px',
    width: '163.11px',
  };

  const desktopLogo = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '48.25px',
    left: '20px',
    position: 'absolute',
    top: '20px',
    width: '163.11px',
  };

  const imageRight = {
    backgroundImage: `url(${avatarFamily})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    bottom: '8px',
    height: '50%',
    position: 'absolute',
    right: '20px',
    width: '50%',
  };

  const imageLeft = {
    backgroundImage: `url(${avatarFather})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    bottom: '24px',
    height: '50%',
    left: '8px',
    position: 'absolute',
    width: '50%',
  };

  const containerRight = {
    backgroundColor: palette.info.light,
    height: '100%',
    position: 'relative',
  };

  const containerLeft = {
    backgroundColor: palette.custom.paper,
    height: '100%',
    position: 'relative',
  };

  const containerLogin = {
    backgroundColor: palette.info.contrastText,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '589px',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '448px',
    zIndex: '1',
  };

  const containerLoginMobile = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '96vh',
    marginTop: '82px',
    width: '100%',
  };

  const loginContainer = (style:{}) => (
    <Box sx={style} />
  );

  if (isMobile) {
    return (
      <Box p={1.6875} style={mobileStyles}>
        <Box sx={mobileLogo} />
        {loginContainer(containerLoginMobile)}
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <Grid container sx={{ height: '100%', width: '100%' }}>
        <Grid sx={containerLeft} item xs={6}>
          <Box sx={imageLeft} />
          <Box sx={desktopLogo} />
        </Grid>
        <Grid sx={containerRight} item xs={6}>
          <Box sx={imageRight} />
        </Grid>
      </Grid>
      {loginContainer(containerLogin)}
    </Box>
  );
}

export default LoginLayout;