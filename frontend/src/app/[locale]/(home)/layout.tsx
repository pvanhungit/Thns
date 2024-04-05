import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { HOME_HEADER_SIZE } from '@/constants';

import HomeFabs from './fabs';
import { HomeFooter } from './footer';
import { HomeHeader } from './header';

// ----------------------------------------------------------------------

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <HomeHeader />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: {
              xs: `${HOME_HEADER_SIZE.H_MOBILE + 10}px`,
              md: `${HOME_HEADER_SIZE.H_DESKTOP + 24}px`,
            },
          }}
        >
          {children}
        </Box>

        <HomeFooter />
      </Container>
      <HomeFabs />
    </>
  );
}
