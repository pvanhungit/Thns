import NextLink from 'next/link';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { APP_NAME } from '@/constants';
import { getScopedI18n } from '@/locales/server';

import { GoogleLoginButton } from '@/modules/auth/client/components';

import { SignInForm } from './sign-in-form';

// ----------------------------------------------------------------------

export default async function SignInPage() {
  const t = await getScopedI18n('auth');

  return (
    <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
      <Typography variant="h4">{t('sign_in_to', { appName: APP_NAME })}</Typography>

      <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
        {t('don_t_have_an_account')}
        <Link variant="subtitle2" sx={{ ml: 0.5 }} component={NextLink} href="/auth/sign-up">
          {t('get_started')}
        </Link>
      </Typography>

      <GoogleLoginButton />

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase' }}>
          {t('or')}
        </Typography>
      </Divider>

      <SignInForm />
    </Card>
  );
}
