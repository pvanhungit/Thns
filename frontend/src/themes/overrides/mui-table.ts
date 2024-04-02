import { type Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiTable = (theme: Theme) => ({
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.neutral,
      },
    },
  },
});
