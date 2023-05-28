import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { width }) => {
  const drWidth = theme.constants.drawerWidth;

  return {
    editorTabs: {
      padding: '6px 5px 0 15px',
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: 'black',
        height: '10px',
        width: '10px',
        left: '4px',
        bottom: '0',
        zIndex: '100',
        borderRadius: '0 0 8px 0',
      },
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: 'black',
        height: '10px',
        width: '10px',
        right: '-5px',
        bottom: '0',
        zIndex: '100',
        borderRadius: '0 0 0 8px',
      },
    },
    editorTab: {
      fontSize: '14px',
      padding: '5px 14px 4px',
      backgroundColor: 'black',
      zIndex: '100',
      position: 'relative',
      borderRadius: '0 0 8px 8px',
      cursor: 'pointer',
    },
    editorTabActive: {
      backgroundColor: 'rgba(19, 32, 39, 1)',
      borderRadius: '8px 8px 0 0',
      position: 'relative',
      zIndex: '90',
      padding: '5px 15px 4px',
      margin: '0 -1px',
      '&::before': {
        content: '""',
        display: 'block',
        height: '10px',
        width: '10px',
        backgroundColor: 'rgba(26, 43, 52, 0.75)',
        position: 'absolute',
        left: '-10px',
        bottom: '0',
      },
      '&::after': {
        content: '""',
        display: 'block',
        height: '10px',
        width: '10px',
        backgroundColor: 'rgba(26, 43, 52, 0.75)',
        position: 'absolute',
        right: '-10px',
        bottom: '0',
      },
    },
    separator: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      height: '16px',
      width: '1px',
      position: 'relative',
      top: '8px',
      zIndex: '89',
    },
    tabContainer: {
      display: 'flex',
    },
    newTab: {
      position: 'relative',
      top: '3px',
      zIndex: '120',
      transition: '0.25s ease-in-out',
      padding: '3px',
      right: '1px',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.15)',
      },
    },
    closeTab: {
      position: 'relative',
      zIndex: '120',
      transition: '0.25s ease-in-out',
      padding: '2px',
      bottom: '1px',
      marginRight: '-8px',
      marginLeft: '5px',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.15)',
      },
    },
  };
});
