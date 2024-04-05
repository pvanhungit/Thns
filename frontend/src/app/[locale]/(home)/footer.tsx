import { type SxProps, type Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { LIST_SHOWROOM } from '@/constants/site-info';

import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

export function HomeFooter() {
  return (
    <Stack alignItems="center" rowGap={2}>
      <Typography variant="h4" textAlign="center" textTransform="uppercase">
        Hệ thống showroom
      </Typography>

      <Divider sx={{ width: 150, borderColor: 'common.black', borderWidth: 1 }} />

      <Grid container sx={{ width: '100%' }}>
        {LIST_SHOWROOM.map((sr, idx) => (
          <Grid item md={3} sm={6} key={`footer-show-row-${idx}`}>
            <Stack direction="column" rowGap={1} sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="center" alignItems="stretch">
                <Box
                  sx={{
                    bgcolor: 'grey',
                    borderTopLeftRadius: 3,
                    borderBottomLeftRadius: 3,
                    alignItems: 'center',
                    display: 'flex',
                    p: 0.75,
                  }}
                >
                  <Iconify icon="mingcute:star-fill" color="common.white" />
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: 'primary.main',
                    borderTopRightRadius: 3,
                    borderBottomRightRadius: 3,
                    alignItems: 'center',
                    display: 'flex',
                    pl: 1,
                  }}
                >
                  <Typography variant="subtitle1" color="common.white">
                    {sr.name}
                  </Typography>
                </Box>
              </Stack>

              <ItemLink text={sr.address} icon="mingcute:map-pin-fill" href="#" />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

function ItemLink({
  icon,
  text,
  href,
  sx,
}: {
  icon: string;
  text: string;
  href: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <MuiLink
      variant="subtitle2"
      display="flex"
      justifyContent="start"
      alignItems="center"
      href={href}
      target={href === '#' ? '_self' : '_blank'}
      color="common.black"
      sx={{ ...sx }}
    >
      <Iconify icon={icon} sx={{ mr: 1 }} />
      {text}
    </MuiLink>
  );
}
