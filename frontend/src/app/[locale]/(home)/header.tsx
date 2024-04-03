'use client';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import { HOME_HEADER_SIZE } from '@/constants';
import { useOffSetTop } from '@/hooks';

import { bgBlur } from '@/themes/css';
import Iconify from '@/components/iconify';
import Logo from '@/components/logo';

// ----------------------------------------------------------------------

export function HomeHeader() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HOME_HEADER_SIZE.H_DESKTOP / 2);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HOME_HEADER_SIZE.H_MOBILE,
            md: HOME_HEADER_SIZE.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: { md: HOME_HEADER_SIZE.H_DESKTOP_OFFSET },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            columnGap: 5,
          }}
        >
          <Logo sx={{ width: 220 }} />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ flex: 1, height: 'auto' }}
          >
            <TextField size="small" sx={{ flex: 1 }} />
            <Button
              sx={{ height: 40 }}
              variant="contained"
              startIcon={<Iconify icon="mingcute:search-2-fill" />}
            >
              Search
            </Button>
          </Stack>

          <Button
            startIcon={
              <Badge badgeContent={1} color="primary" variant="standard">
                <Iconify icon="mingcute:shopping-cart-2-fill" width={30} />
              </Badge>
            }
          >
            Cart
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
