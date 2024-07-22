import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Scalable Performance',
    description:
      'Our tool seamlessly adapts to your AWS DynamoDB capacity needs, optimizing performance and enhancing efficiency.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Robust Infrastructure',
    description:
      'Built with a strong foundation, our tool ensures reliability and long-term durability for your database management.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'User-Friendly Interface',
    description:
      'Experience an intuitive and easy-to-use interface designed to integrate smoothly into your workflow.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Advanced AI Features',
    description:
      'Leverage Amazon Bedrock for predictive analytics, providing insights and trends for your DynamoDB data.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Dedicated Support',
    description:
      'Rely on our responsive customer support team, dedicated to assisting you beyond the initial setup.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Detailed Analytics',
    description:
      'Gain access to detailed analytics and visualizations, helping you make informed decisions about your database capacities.',
  },
];

export default function Highlights() {
  const theme = useTheme();

  return (
    <Box
      id='highlights'
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: theme.palette.text.primary,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component='h2' variant='h4'>
            Highlights
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: theme.palette.text.secondary }}
          >
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction='column'
                color='inherit'
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  background: 'transparent',
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight='medium' gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
