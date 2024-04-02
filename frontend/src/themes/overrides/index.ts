import { type Theme } from '@mui/material/styles';

import { MuiBackdrop } from './mui-backdrop';
import { MuiButton } from './mui-button';
import { MuiCard } from './mui-card';
import { MuiCssBaseline } from './mui-css-baseline';
import { MuiInput } from './mui-input';
import { MuiLink } from './mui-link';
import { MuiMenu } from './mui-menu';
import { MuiPaper } from './mui-paper';
import { MuiTable } from './mui-table';
import { MuiTooltip } from './mui-tooltip';
import { MuiTypography } from './mui-typography';

// ----------------------------------------------------------------------

export const overrides = (theme: Theme): Theme['components'] =>
  Object.assign(
    {},
    MuiCssBaseline(theme),
    MuiBackdrop(theme),
    MuiButton(theme),
    MuiCard(theme),
    MuiInput(theme),
    MuiLink(theme),
    MuiMenu(theme),
    MuiPaper(theme),
    MuiTable(theme),
    MuiTooltip(theme),
    MuiTypography(theme),
  );
