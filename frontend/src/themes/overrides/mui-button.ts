import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiButton = (theme: Theme): Theme['components'] => ({
  MuiButton: {
    styleOverrides: {
      containedInherit: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[800],
        '&:hover': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[800],
        },
      },
      sizeLarge: {
        minHeight: 48,
      },
    },
  },
});
