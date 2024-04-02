import { Analytics } from '@vercel/analytics/react';

import { primaryFont } from '@/themes';
import { ToastContainer } from '@/components/toastify';

// ----------------------------------------------------------------------

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={primaryFont.className}>
        {children}

        <ToastContainer />
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  );
}
