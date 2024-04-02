import { alpha, type Theme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export const MuiInput = (theme: Theme): Theme['components'] => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: alpha(theme.palette.grey[500], 0.24),
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
});
