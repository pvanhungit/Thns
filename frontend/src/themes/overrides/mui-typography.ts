import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiTypography = (theme: Theme) => ({
  MuiTypography: {
    styleOverrides: {
      paragraph: {
        marginBottom: theme.spacing(2),
      },
      gutterBottom: {
        marginBottom: theme.spacing(1),
      },
    },
  },
});
