import * as React from 'react';
import { alpha, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id='hero'
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 5 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant='h1'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Watch
            <Typography
              component='span'
              variant='h1'
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'primary.light',
              }}
            >
              Tower
            </Typography>
          </Typography>
          <Typography
            textAlign='center'
            color='text.secondary'
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            When initializing AWS DynamoDB, it can be a challenge for developers
            to configure their database. Without metric data, development teams
            could be using a suboptimal provisioning level. Our solution:{' '}
            <strong>WatchTower</strong>
          </Typography>
          <Typography
            textAlign='center'
            color='text.secondary'
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Get started below.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf='center'
            spacing={1}
            useFlexGap
            sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
          >
            <Link
              href='https://github.com/oslabs-beta/watchtower'
              color='primary'
            >
              <Button variant='contained' color='primary'>
                Start now{' '}
              </Button>
            </Link>
          </Stack>
          <Typography
            variant='caption'
            textAlign='center'
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you will be taken to our &nbsp;
            <Link
              href='https://github.com/oslabs-beta/watchtower'
              color='primary'
            >
              GitHub repo
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
      <Divider
        sx={{
          width: '80%',
          marginLeft: '10%',
          marginRight: '10%',
          borderBottomWidth: 2,
          borderColor: 'light gray',
          opacity: '0.8',
          justifyContent: 'center',
        }}
      />
    </Box>
  );
}
