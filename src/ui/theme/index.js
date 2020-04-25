import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Proxima Nova'],
  },
  palette: {
    primary: {
      main: '#074265',
    },
    background: {
      default: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
