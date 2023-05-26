import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { open }) => ({
  drawer: {
    backgroundColor: theme.palette.secondary.background,
    position: 'absolute',
    left: open ? '0' : '-220px',
    height: `calc(100vh - ${theme.constants.bannerHeight + 'px'})`,
    width: `${theme.constants.drawerWidth}px`,
  },
}));
