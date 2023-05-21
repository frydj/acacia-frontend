import React from 'react';
import './Banner.css';
import { useStyles } from './BannerStyles';

import Container from '../../Bits/Container/Container';
import IconButton from '../../Pieces/IconButton/IconButton';
import Settings from '../../../assets/icons/Settings';
import ThemeToggle from '../../../theme/ThemeToggle';
import { useTheme } from '../../../theme/ThemeContext';

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container lay={{ x: 'between', y: 'center' }} className={classes.banner}>
      <span className={classes.mainTitle} id="acacia">
        acacia
      </span>
      {/* <IconButton link={'/settings'} size="md">
        <Settings />
      </IconButton> */}
      <ThemeToggle onClick={theme.toggle} theme={theme} />
    </Container>
  );
};

export default Banner;
