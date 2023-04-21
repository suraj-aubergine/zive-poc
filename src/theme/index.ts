import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '16px',
          color: '#FFFFFF',
          backgroundColor: '#1B1D21',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#F4F7FA',
            border: '1px solid #466A68',
            borderRadius: 6,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#642DFC',
          '& .MuiSvgIcon-root': {
            color: '#642DFC',
          },
        },
        colorSecondary: {
          '&$checked': {
            color: '#642DFC',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: '#642DFC',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
  palette: {
    primary: {
      main: green[800],
      light: green[300],
      dark: green[700],
    },
    secondary: {
      main: green[300],
      light: green[200],
      dark: green[700],
    },
    text: {
      primary: '#353B41',
      secondary: '#8593A3;',
    },
    error: {
      main: '#FF5858',
    },
    background: {
      default: 'rgba(0, 0, 0, 0.08)',
    },
    action: {
      disabledBackground: '#BEC8D0',
      disabled: '#F4F7FA',
      disabledOpacity: 0.7,
      hover: green[700],
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'NotoSans',
      textTransform: 'none',
      fontSize: 16,
    },
  },
});

export { theme };
