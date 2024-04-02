import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiTooltip = (theme: Theme) => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.palette.grey[800],
      },
      arrow: {
        color: theme.palette.grey[800],
      },
    },
  },
});
