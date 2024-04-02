import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiMenu = (theme: Theme) => ({
  MuiMenuItem: {
    styleOverrides: {
      root: {
        ...theme.typography.body2,
      },
    },
  },
});
