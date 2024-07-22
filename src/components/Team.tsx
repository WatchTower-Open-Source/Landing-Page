import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import Erik from '../assets/Erik.png';
import Lauren from '../assets/Lauren.png';
import Toast from '../assets/Toast.png';
import Miso from '../assets/Miso.png';
import Pug from '../assets/Pug.png';

const whiteLogos = [Erik, Lauren, Toast, Miso, Pug];
const darkLogos = [Erik, Lauren, Toast, Miso, Pug];
const names = ['Erik Gao', 'Lauren Felty', 'Toast', 'Miso', 'Kreature'];

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
      <Grid container justifyContent='center' sx={{ mt: 4, opacity: 1.0 }}>
        {logos.map((logo, index) => (
          <Grid item key={index} sx={{ textAlign: 'center', mx: 2 }}>
            <img
              src={logo}
              alt={`Team member ${names[index]}`}
              style={logoStyle}
            />
            <Typography variant='subtitle1' color='text.primary' sx={{ mt: 1 }}>
              {names[index]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
