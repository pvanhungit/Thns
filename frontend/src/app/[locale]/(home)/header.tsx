'use client';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import { HOME_HEADER_SIZE } from '@/constants';
import { useOffSetTop } from '@/hooks';
import { useI18n } from '@/locales/client';

import { bgBlur } from '@/themes/css';
import Iconify from '@/components/iconify';
import Logo from '@/components/logo';
import ResponsiveHidden from '@/components/responsive-hidden';

// ----------------------------------------------------------------------

export function HomeHeader() {
  const t = useI18n();
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
          <Logo />

          <Stack
            direction="row"
            alignItems="stretch"
            justifyContent="center"
            sx={{ flex: 1, height: 'auto' }}
          >
            <TextField size="small" sx={{ flex: 1 }} />

            <ResponsiveHidden query="down" start="md">
              <Button variant="contained" startIcon={<Iconify icon="mingcute:search-2-fill" />}>
                {t('actions.search')}
              </Button>
            </ResponsiveHidden>
            <ResponsiveHidden query="up" start="md">
              <IconButton>
                <Iconify icon="mingcute:search-2-fill" />
              </IconButton>
            </ResponsiveHidden>
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
