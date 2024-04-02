'use client';

import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { HashLoader } from 'react-spinners';

// ----------------------------------------------------------------------

export type LoadingScreenProp = BoxProps;

export function LoadingScreen({ sx, ...other }: LoadingScreenProp) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <HashLoader size={100} loading color={theme.palette.primary.main} />
    </Box>
  );
}
