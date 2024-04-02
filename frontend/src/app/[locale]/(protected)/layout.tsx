import * as React from 'react';

// ----------------------------------------------------------------------

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // todo: implement AuthGuard to protected pages
  return children;
}
