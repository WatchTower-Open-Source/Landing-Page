import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import logo from '../assets/logo.png';
import bedrockLogo from '../assets/bedrock.png';
import gitHub from '../assets/github-logo.png';
import awsLogo from '../assets/awsLogo.png';
import darkGitHub from '../assets/darkmode-github.png';

const whiteLogos = [logo, bedrockLogo, gitHub, awsLogo];
const darkLogos = [logo, bedrockLogo, darkGitHub, awsLogo];

const logoStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  margin: '0 32px',
  borderRadius: '50%',
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'dark' ? darkLogos : whiteLogos;

  return (
    <Box id='logoCollection' sx={{ py: 4 }}>
      <Typography
        component='p'
        variant='subtitle2'
        align='center'
        color='text.secondary'
        fontWeight='bold'
      >
        Made possible by the following technologies:
      </Typography>
      <Grid container justifyContent='center' sx={{ mt: 4, opacity: 1.0 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
