'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { getErrorMessage } from '@/utils/error';
import { useI18n } from '@/locales/client';

import FormProvider, { RHFPasswordField, RHFTextField } from '@/components/rhf';

import { SignInFormSchema } from '@/schemas/auth';

// ----------------------------------------------------------------------

type SignInFormValues = z.infer<typeof SignInFormSchema>;
const defaultValues: SignInFormValues = {
  email: '',
  password: '',
};

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useI18n();

  const [error, setError] = React.useState('');

  const methods = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues,
  });

  async function handleSubmit(data: SignInFormValues) {
    try {
      setError('');
      // todo: update call api to login
      await new Promise((r) => setTimeout(r, 1000));
      toast.success('Login success');

      const returnTo = searchParams.get('returnTo') ?? '/dashboard';
      router.replace(returnTo);
    } catch (error) {
      const errorMgs = getErrorMessage(error);
      setError(errorMgs);
    }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <RHFTextField name="email" label={t('fields.email_address')} />
        <RHFPasswordField name="password" label={t('fields.password')} />

        {error ? <Alert severity="error">{error}</Alert> : null}

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="inherit"
          disabled={methods.formState.isSubmitting}
        >
          {t('actions.login')}
        </Button>

        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <Link variant="subtitle2" component={NextLink} href="/auth/forgot-password">
            {t('auth.forgot_password')}
          </Link>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
