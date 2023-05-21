import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    test: {
      color: 'red',
      '&:hover': {
        color: 'blue',
      },
    },
    banner: {
      outline: '1px solid red',
      padding: '20px',
      backgroundColor: theme.palette.meow.mainbg,
      color: 'rgba(230,230,230,1)',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      flex: '1',
      width: 'calc(100%)',
      transition: '0.25s ease-in-out',
    },
    mainTitle: {
      fontSize: '24px',
      fontWeight: '500',
      letterSpacing: '-0.5px',
    },
  };
});
