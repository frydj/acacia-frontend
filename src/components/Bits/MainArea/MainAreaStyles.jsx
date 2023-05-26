import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, { open }) => ({
  mainArea: {
    backgroundColor: theme.palette.test.background,
    transition: theme.palette.main.transition,
    width: open
      ? `calc(100vw - ${theme.constants.drawerWidth + 'px'})`
      : '100vw',
    height: `calc(100vh - ${theme.constants.bannerHeight + 'px'})`,
  },
}));
