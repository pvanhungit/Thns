'use client';

import React from 'react';

import { alpha } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useGoogleLogin } from '@react-oauth/google';

import { useScopedI18n } from '@/locales/client';

import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

export type GoogleLoginButtonProps = Omit<ButtonProps, 'onClick' | 'children'>;

export const GoogleLoginButton = ({ sx, ...others }: GoogleLoginButtonProps) => {
  const t = useScopedI18n('auth');

  const handleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (tokenResponse) => {
      console.log('[GoogleLoginButton] SUCCESS', tokenResponse);
      // todo
    },
    onError: (error) => {
      console.log('[GoogleLoginButton] ERROR', error);
    },
  });

  const handleOnClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleLogin();
  }, []);

  return (
    <Button
      fullWidth
      size="large"
      color="inherit"
      variant="outlined"
      sx={{
        ...sx,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: (theme) => alpha(theme.palette.primary.main, 0.5),
      }}
      {...others}
      onClick={handleOnClick}
    >
      <Iconify icon="flat-color-icons:google" sx={{ mr: 3 }} />

      <Typography variant="button" sx={{ fontWeight: 600 }}>
        {t('continue_with', { provider: 'Google' })}
      </Typography>
    </Button>
  );
};
