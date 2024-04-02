import * as React from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { Icon, IconProps } from '@iconify/react';

// ----------------------------------------------------------------------

export type IconifyProps = Omit<BoxProps, 'height'> & {
  width?: number | string;
  icon: IconProps['icon'];
};

export const Iconify = React.forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  ),
);

Iconify.displayName = 'Iconify';
