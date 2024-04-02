'use client';

import * as React from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { bgGradient } from '@/themes/css';
import LanguagePopover from '@/components/language-popover';
import Logo from '@/components/logo';

// ----------------------------------------------------------------------

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo sx={{ position: 'fixed', top: { xs: 16, md: 24 }, left: { xs: 16, md: 24 } }} />

      <LanguagePopover
        showLabel
        sx={{ position: 'fixed', top: { xs: 16, md: 24 }, right: { xs: 16, md: 24 } }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        {children}
      </Stack>
    </Box>
  );
}
