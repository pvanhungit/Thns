'use client';

import * as React from 'react';

import LoadingScreen from '../loading-screen';

export type ClientOnlyProps = React.PropsWithChildren;

export function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <LoadingScreen />;
  }

  return children;
}

export const withClientOnly = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ClientOnly: React.FC<P> = (props) => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) {
      return <LoadingScreen />;
    }

    return <WrappedComponent {...props} />;
  };

  return ClientOnly;
};
