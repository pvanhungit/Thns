'use client';

import React from 'react';

import { type Breakpoint } from '@mui/material/styles';

import { useResponsive } from '@/hooks';

// ----------------------------------------------------------------------

export type ResponsiveHiddenProps = React.PropsWithChildren<{
  query: 'up' | 'down' | 'between' | 'only';
  start: Breakpoint | number;
  end?: Breakpoint | number;
}>;

export default function ResponsiveHidden({ query, start, end, children }: ResponsiveHiddenProps) {
  const isHidden = useResponsive(query, start, end);

  if (isHidden) {
    return null;
  }

  return children;
}
