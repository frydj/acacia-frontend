import React from 'react';
import { IconButton } from '@mui/material';
import { LightMode } from '@mui/icons-material';
import { DarkMode } from '@mui/icons-material';

const ThemeToggle = ({ onClick, theme }) => {
  const buttonTitle =
    theme.palette.type === 'dark'
      ? 'View App in Light Mode'
      : 'View App in Dark Mode';

  return (
    <IconButton
      aria-label={buttonTitle}
      title={buttonTitle}
      color="inherit"
      onClick={onClick}
    >
      {theme.palette.type === 'light' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;
