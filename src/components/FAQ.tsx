import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id='faq'
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component='h2'
        variant='h4'
        color='text.primary'
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1d-content'
            id='panel1d-header'
          >
            <Typography component='h3' variant='subtitle2'>
              What is WatchTower?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant='body2'
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              WatchTower is an advanced visualization tool designed to display
              provisional capacities of your AWS DynamoDB database, enabling
              developers to gain deeper insights into their usage patterns.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2d-content'
            id='panel2d-header'
          >
            <Typography component='h3' variant='subtitle2'>
              Which cloud providers does WatchTower support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant='body2'
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Currently, WatchTower exclusively supports AWS DynamoDB. Please
              stay tuned for updates regarding support for additional cloud
              providers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3d-content'
            id='panel3d-header'
          >
            <Typography component='h3' variant='subtitle2'>
              What sets WatchTower apart from other products in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant='body2'
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              WatchTower stands out due to its adaptive performance, robust
              infrastructure, and innovative AI-driven features. Our commitment
              to user satisfaction and comprehensive support ensures an
              exceptional experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel4d-content'
            id='panel4d-header'
          >
            <Typography component='h3' variant='subtitle2'>
              How can I get started?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant='body2'
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              To get started, please visit our{' '}
              <Link
                href='https://github.com/oslabs-beta/watchtower'
                color='primary'
              >
                GitHub
              </Link>{' '}
              page for comprehensive information and setup instructions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
