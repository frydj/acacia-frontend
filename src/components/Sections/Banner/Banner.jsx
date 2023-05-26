import React from 'react';
import './Banner.css';
import { useStyles } from './BannerStyles';

import Container from '../../Bits/Container/Container';
import Settings from '../../../assets/icons/Settings';
import ThemeToggle from '../../../theme/ThemeToggle';
import { useTheme } from '../../../theme/ThemeContext';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useGlobal from '../../../hooks/useGlobal';

const Banner = () => {
  const {
    state: { open },
    dispatch,
  } = useGlobal();

  const { classes } = useStyles();
  const theme = useTheme();

  const toggle = () => {
    console.log('toggle was called');
    dispatch({ type: 'open', value: !open });
  };

  return (
    <Container lay={{ x: 'between', y: 'center' }} className={classes.banner}>
      <span className={classes.mainTitle} id="acacia">
        <IconButton size="small" onClick={toggle} color="inherit">
          <Menu />
        </IconButton>
      </span>
      <ThemeToggle onClick={theme.toggle} theme={theme} />
    </Container>
  );
};

export default Banner;
