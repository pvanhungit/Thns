import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from '@/components/iconify';

import { RHFTextField, RHFTextFieldProps } from './rhf-text-field';

// ----------------------------------------------------------------------

export type RHFPasswordFieldProps = Omit<RHFTextFieldProps, 'type'>;

export function RHFPasswordField(props: RHFPasswordFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPassword((prev) => !prev);
    },
    [setShowPassword],
  );

  return (
    <RHFTextField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end" tabIndex={-1}>
              <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
