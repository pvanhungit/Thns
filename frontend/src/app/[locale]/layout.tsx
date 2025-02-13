import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { LocalesProvider } from '@/locales/client';

import { ThemeProvider } from '@/themes';

import { GoogleOAuthProvider } from '@/modules/auth/client';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export type RootLayoutProps = React.PropsWithChildren<{
  params: { locale: string };
}>;

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <LocalesProvider locale={locale ?? 'en'}>
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <ThemeProvider>
          <GoogleOAuthProvider>{children}</GoogleOAuthProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </LocalesProvider>
  );
}
