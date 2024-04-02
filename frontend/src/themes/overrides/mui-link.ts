import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiLink = (theme: Theme) => ({
  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
    styleOverrides: {
      root: {
        cursor: 'pointer',
      },
    },
  },
});
