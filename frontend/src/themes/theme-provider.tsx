'use client';

import * as React from 'react';

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  type ThemeOptions,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { enUS, viVN } from '@mui/material/locale';

import { useCurrentLocale } from '@/locales/client';

import { customShadows } from './custom-shadows';
import { overrides } from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

// ----------------------------------------------------------------------

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const currentLocale = useCurrentLocale();
  const memoizedValue = React.useMemo<ThemeOptions>(
    () => ({
      palette: palette('light'),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [],
  );

  const theme = React.useMemo(() => {
    const themeValued = createTheme(memoizedValue, getMuiLocale(currentLocale));
    themeValued.components = overrides(themeValued);
    return themeValued;
  }, [currentLocale]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

const getMuiLocale = (locale: ReturnType<typeof useCurrentLocale>) => {
  switch (locale) {
    case 'vi':
      return viVN;

    default:
      return enUS;
  }
};
