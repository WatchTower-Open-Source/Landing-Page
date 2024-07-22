import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/system';
import Erik from '../assets/Erik.png';
import Mike from '../assets/Mike.png';
import Piero from '../assets/Piero.jpg';
import James from '../assets/James.png';
import Lauren from '../assets/Lauren.png';
import Toast from '../assets/Toast.png';
import Miso from '../assets/Miso.png';
import Pug from '../assets/Pug.png';

const whiteLogos = [Erik, James, Lauren, Mike, Piero];
const darkLogos = [Erik, James, Lauren, Mike, Piero];
const names = [
  'Erik Gao',
  'James Coen',
  'Lauren Felty',
  'Mike Bui',
  'Piero Espejo',
];

const linkedLn = [
  'https://www.linkedin.com/in/erikgaogg/',
  'https://www.linkedin.com/in/james-coen-2a00a3148/',
  'https://www.linkedin.com/in/lauren-felty/',
  'https://www.linkedin.com/in/mike-bui09/',
  'https://www.linkedin.com/in/piero-espejo-6813a9b0/',
];

const whiteSecondaryImages = [Toast, Miso, Pug];
const darkSecondaryImages = [Toast, Miso, Pug];
const secondNames = ['Toast', 'Miso', 'Kreature'];

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
            <Link href={linkedLn[index]} color='primary'>
              <Typography
                variant='subtitle1'
                color='text.primary'
                sx={{ mt: 1 }}
              >
                {names[index]}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
