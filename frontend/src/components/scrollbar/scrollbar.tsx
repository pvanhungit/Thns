import * as React from 'react';

import { type SxProps, type Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { type Props as SimpleBarProps } from 'simplebar-react';

import { StyledRootScrollbar, StyledScrollbar } from './scrollbar.styles';

// ----------------------------------------------------------------------

export type ScrollbarProps = React.PropsWithChildren<
  SimpleBarProps & {
    sx: SxProps<Theme>;
  }
>;

const Scrollbar = React.forwardRef<HTMLElement, ScrollbarProps>(
  ({ children, sx, ...other }, ref) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar scrollableNodeProps={{ ref }} clickOnTrack={false} sx={sx} {...other}>
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  },
);

export default React.memo(Scrollbar);
