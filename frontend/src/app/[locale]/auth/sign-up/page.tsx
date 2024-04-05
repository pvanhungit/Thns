import NextLink from 'next/link';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { getScopedI18n } from '@/locales/server';

import { GoogleLoginButton } from '@/modules/auth/client/components';

import SignUpForm from './sign-up-form';

// ----------------------------------------------------------------------

export default async function SignUpPage() {
  const t = await getScopedI18n('auth');
  return (
    <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
      <Typography variant="h4">Get started absolutely free</Typography>
      <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
        Already have an account?
        <Link variant="subtitle2" sx={{ ml: 0.5 }} component={NextLink} href="/auth/sign-in">
          Sign in
        </Link>
      </Typography>
      <GoogleLoginButton />
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('or')}
        </Typography>
      </Divider>
      <SignUpForm />
    </Card>
  );
}
