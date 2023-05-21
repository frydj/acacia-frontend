import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {
  blueGrey,
  brown,
  cyan,
  grey,
  pink,
  red,
  blue,
} from '@mui/material/colors';
import { alpha, darken, lighten } from '@mui/material/styles';

const ThemeToggleContext = React.createContext();
export const useTheme = () => React.useContext(ThemeToggleContext);

const darkThemeBase = createTheme({
  palette: {
    meow: {
      mainbg: blue[900],
    },
    pre: {
      background: blueGrey[800],
      key: cyan[100],
      value: blueGrey[200],
    },
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: red['A200'],
    },
    text: {
      main: '#FFF',
      inverse: blueGrey[500],
    },
    type: 'dark',
  },
  typography: {},
});

const darkTheme = createTheme(
  {
    overrides: {
      MuiAccordion: {
        root: {
          backgroundColor: blueGrey[800],
        },
      },
      MuiAccordionDetails: {
        root: {
          backgroundColor: blueGrey[100],
          color: darkThemeBase.palette.text.inverse,
        },
      },
      MuiBadge: {
        colorSecondary: {
          border: `solid ${darken(blueGrey[900], 0.2)} 3px`,
          fontFamily: 'RobotoBlack',
        },
      },
      MuiBox: {
        root: {
          background: blueGrey[900],
        },
      },
      MuiBreadcrumbs: {
        ol: {
          fontSize: '0.85rem',
          fontFamily: 'RobotoBold',
        },
      },
      MuiButton: {
        contained: {
          backgroundColor: blueGrey[700],
          '&:hover': {
            backgroundColor: darken(blueGrey[700], 0.2),
          },
        },
      },
      MuiCollapse: {
        wrapperInner: {
          color: darkThemeBase.palette.primary.main,
          fontFamily: 'Roboto',
        },
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            backgroundColor: darken(blueGrey[900], 0.2),
          },
          '#root': {
            backgroundColor: darken(blueGrey[900], 0.2),
          },
        },
      },
      MuiDrawer: {
        paper: {
          backgroundColor: lighten('#000000', 0.05),
        },
        paperAnchorDockedLeft: {
          borderRight: '0px',
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: darkThemeBase.palette.pre.background,
        },
      },
      MuiDialogActions: {
        root: {
          '& button': {
            color: darkThemeBase.palette.text.main,
            backgroundColor: lighten(darkThemeBase.palette.pre.background, 0.2),
            '&:hover': {
              backgroundColor: lighten(
                darkThemeBase.palette.pre.background,
                0.1
              ),
            },
          },
        },
      },
      MuiDialogTitle: {
        root: {
          color: darkThemeBase.palette.text.main,
          padding: `
            ${darkThemeBase.spacing(2)}px
            ${darkThemeBase.spacing(3)}px
            ${darkThemeBase.spacing(1)}px
          `,
        },
      },
      MuiFormControl: {
        root: {
          border: `solid ${alpha(blueGrey[800], 0.7)} 1px`,
          backgroundColor: alpha(blueGrey[500], 0.3),
          borderRadius: '4px',
          transition: 'all 100ms ease-in-out',
          '&:hover': {
            border: `solid ${alpha('#000000', 0.3)} 1px`,
          },
        },
      },
      MuiInput: {
        underline: {
          '&:before': {
            borderBottom: 'none',
          },
        },
      },
      MuiInputAdornment: {
        root: {
          color: pink['A400'],
          padding: '5px',
        },
      },
      MuiInputBase: {
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiListItem: {
        button: {
          border: 0,
          marginTop: 0,
          transition: 'all 100ms ease-in-out',
          '&:hover': {
            backgroundColor: darken(blueGrey[900], 0.2),
            boxShadow: 'none',
          },
        },
      },
      MuiListItemIcon: {
        root: {
          minWidth: '40px',
          margin: '5px 0px',
        },
      },
      MuiMenu: {
        paper: {
          backgroundColor: lighten('#000000', 0.1),
        },
      },
      MuiPaper: {
        elevation1: {
          boxShadow: 'none',
        },
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiPickersBasePicker: {
        container: {
          backgroundColor: blueGrey[900],
        },
      },
      MuiSkeleton: {
        root: {
          transform: 'unset',
          padding: '0 5px',
          height: '100%',
          width: '100%',
          animationDuration: '1.0s',
        },
        text: {
          transform: 'scale(1, 1)',
          color: 'black',
        },
      },
      MuiTable: {
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiTableCell: {
        root: {
          padding: '10px',
          fontFamily: 'RobotoMedium',
          borderBottom: `solid ${blueGrey[800]} 1px`,
        },
        head: {
          fontFamily: 'RobotoBlack',
          fontSize: '0.8em',
          color: grey[400],
          padding: '8px',
          lineHeight: '1rem',
          // placeholder for filter
          textTransform: 'uppercase',
        },
      },
      MuiTablePagination: {
        caption: {
          fontFamily: 'RobotoMedium',
        },
        spacer: {
          flex: '0 0 auto',
        },
        toolbar: {
          borderBottom: '0px',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: darken(blueGrey[900], 0.2),
          borderBottom: `solid ${blueGrey[800]} 1px`,
        },
      },
      MuiTypography: {
        h4: {
          fontFamily: 'RobotoBlack',
        },
      },
    },
  },
  darkThemeBase
);

const lightThemeBase = createTheme({
  palette: {
    meow: {
      mainbg: blue[600],
    },
    pre: {
      background: blueGrey['A100'],
      key: red['A200'],
      value: blueGrey[900],
    },
    primary: {
      main: grey[100],
    },
    secondary: {
      main: red['A200'],
    },
    text: {
      main: blueGrey[800],
      inverse: '#FFF',
    },
    type: 'light',
  },
  typography: {},
});

const lightTheme = createTheme(
  {
    overrides: {
      MuiAccordion: {
        root: {
          backgroundColor: red[300],
          color: grey[50],
        },
      },
      MuiAccordionDetails: {
        root: {
          backgroundColor: grey[50],
          color: lightThemeBase.palette.text.main,
        },
      },
      MuiBadge: {
        colorSecondary: {
          border: `solid ${grey[50]} 3px`,
          fontFamily: 'RobotoBlack',
        },
      },
      MuiBox: {
        root: {
          background: blueGrey[100],
        },
      },
      MuiBreadcrumbs: {
        ol: {
          fontSize: '0.85rem',
          fontFamily: 'RobotoBold',
        },
      },
      MuiButton: {
        contained: {
          backgroundColor: red[300],
          '&:hover': {
            backgroundColor: darken(red[300], 0.2),
          },
        },
        startIcon: {},
      },
      MuiCollapse: {
        wrapperInner: {
          color: lightThemeBase.palette.primary.main,
          fontFamily: 'Roboto',
        },
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            backgroundColor: blueGrey[50],
          },
          '#root': {
            backgroundColor: blueGrey[50],
          },
        },
      },
      MuiDrawer: {
        paper: {
          backgroundColor: blueGrey[200],
        },
        paperAnchorDockedLeft: {
          borderRight: '0px',
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: lightThemeBase.palette.pre.background,
        },
      },
      MuiDialogActions: {
        root: {
          '& button': {
            color: lightThemeBase.palette.text.main,
            backgroundColor: darken(lightThemeBase.palette.pre.background, 0.1),
            '&:hover': {
              backgroundColor: darken(
                lightThemeBase.palette.pre.background,
                0.2
              ),
            },
          },
        },
      },
      MuiDialogTitle: {
        root: {
          color: lightThemeBase.palette.text.main,
          padding: `
            ${lightThemeBase.spacing(2)}px
            ${lightThemeBase.spacing(3)}px
            ${lightThemeBase.spacing(1)}px
          `,
        },
      },
      MuiFormControl: {
        root: {
          border: `solid ${grey[300]} 1px`,
          backgroundColor: grey[50],
          borderRadius: '4px',
          transition: 'all 100ms ease-in-out',
          '&:hover': {
            border: `solid ${grey['A100']} 1px`,
          },
        },
      },
      MuiInput: {
        underline: {
          '&:before': {
            borderBottom: 'none',
          },
        },
      },
      MuiInputAdornment: {
        root: {
          color: pink['A400'],
          padding: '5px',
        },
      },
      MuiInputBase: {
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiListItem: {
        button: {
          marginTop: 0,
          border: 0,
          transition: 'all 100ms ease-in-out',
          '&:hover': {
            backgroundColor: blueGrey[100],
            boxShadow: `0 5px 3px -2px ${alpha(grey[900], 0.1)}`,
          },
        },
      },
      MuiListItemIcon: {
        root: {
          minWidth: '40px',
          margin: '5px 0px',
        },
      },
      MuiMenu: {
        paper: {
          backgroundColor: grey[100],
        },
      },
      MuiPaper: {
        elevation1: {
          boxShadow: 'none',
        },
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiPickersBasePicker: {
        container: {
          backgroundColor: blueGrey[100],
        },
      },
      MuiSkeleton: {
        root: {
          transform: 'unset',
          padding: '0 5px',
          height: '100%',
          width: '100%',
          animationDuration: '1.0s',
        },
        text: {
          transform: 'scale(1, 1)',
          color: 'black',
        },
      },
      MuiTable: {
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiTableCell: {
        root: {
          padding: '10px 25px 10px 10px',
          fontFamily: 'RobotoMedium',
          borderBottom: `solid ${brown[100]} 1px`,
        },
        head: {
          fontFamily: 'RobotoBlack',
          fontSize: '0.8em',
          color: grey[800],
          padding: '8px',
          lineHeight: '1rem',
          textTransform: 'uppercase',
        },
      },
      MuiTablePagination: {
        caption: {
          fontFamily: 'RobotoMedium',
        },
        spacer: {
          flex: '0 0 auto',
        },
        toolbar: {
          borderBottom: '0px',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: blueGrey[100],
          borderBottom: `solid ${brown[200]} 1px`,
        },
      },
      MuiTypography: {
        h4: {
          fontFamily: 'RobotoBold',
        },
      },
    },
  },
  lightThemeBase
);

const paletteTypeKey = 'paletteType';
const storedType = localStorage.getItem(paletteTypeKey);
const currentTheme = storedType === 'light' ? lightTheme : darkTheme;

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(currentTheme);
  const {
    palette: { type },
  } = theme;

  const toggle = () => {
    const updatedTheme = type === 'dark' ? lightTheme : darkTheme;
    localStorage.setItem(paletteTypeKey, updatedTheme.palette.type);
    setTheme(updatedTheme);
  };

  return (
    <ThemeToggleContext.Provider value={{ ...theme, toggle: toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default CustomThemeProvider;
