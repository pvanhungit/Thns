'use client';

import React from 'react';

import { GoogleOAuthProvider as ReactGoogleOAuthProvider } from '@react-oauth/google';

// ----------------------------------------------------------------------

export type GoogleOAuthProviderProps = React.PropsWithChildren;

export function GoogleOAuthProvider({ children }: GoogleOAuthProviderProps) {
  return (
    <ReactGoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      {children}
    </ReactGoogleOAuthProvider>
  );
}
