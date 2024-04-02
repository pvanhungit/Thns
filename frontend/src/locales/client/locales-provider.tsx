'use client';

import LoadingScreen from '@/components/loading-screen';

import { I18nProviderClient } from './create-i18-client';

// ----------------------------------------------------------------------

type ProviderProps = React.PropsWithChildren<{
  locale: string;
}>;

export function LocalesProvider({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<LoadingScreen />}>
      {children}
    </I18nProviderClient>
  );
}
