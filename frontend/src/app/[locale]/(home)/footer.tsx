import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { LIST_SHOWROOM } from '@/constants';

import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

export function HomeFooter() {
  return (
    <Stack alignItems="center">
      <Typography variant="h5" textAlign="center" textTransform="uppercase">
        Hệ thống showroom
      </Typography>

      <Divider sx={{ width: 150 }} />

      <Grid container sx={{ width: '100%' }}>
        {LIST_SHOWROOM.map((sr, idx) => (
          <Grid item md={3} xs={6} key={`footer-show-row-${idx}`}>
            <MuiLink
              variant="subtitle2"
              display="flex"
              justifyContent="start"
              alignItems="center"
              href="http://ss.com"
              target="_blank"
              color="common.black"
            >
              <Iconify icon="mingcute:map-pin-fill" />
              {sr.address}
            </MuiLink>

            <Typography>{sr.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
