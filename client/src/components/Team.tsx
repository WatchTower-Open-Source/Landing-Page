import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import Lauren from '../../assets/Lauren.png';
import Toast from '../../assets/Toast.png';
import Miso from '../../assets/Miso.png';
import Pug from '../../assets/Pug.png';

const whiteLogos = [Lauren, Toast, Miso, Pug];

const darkLogos = [Lauren, Toast, Miso, Pug];

const logoStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  margin: '0 32px',
  borderRadius: '50%',
};

export default function Team() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id='team' sx={{ py: 4 }}>
      <Typography
        component='p'
        variant='h2'
        align='center'
        color='text.secondary'
        fontWeight='bold'
      >
        Meet The Team
      </Typography>
      <Grid container justifyContent='center' sx={{ mt: 0.5, opacity: 1.0 }}>
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
