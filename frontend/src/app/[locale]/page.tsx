import NextLink from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography>Hello world</Typography>

      <NextLink href="/auth/sign-in">
        <Button>Login</Button>
      </NextLink>
    </Stack>
  );
}
