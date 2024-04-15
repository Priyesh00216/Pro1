// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import Grid from '@mui/material/Grid';
import PendCall from './PendCall';


// ----------------------------------------------------------------------

export default function FiveView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
    <Typography variant="h4"> Your Pending Calls </Typography>
    <Grid maxWidth="xs" marginTop={2}>
      <PendCall/>
    {/* <TicketTable data={data}/> */}
    </Grid>
  </Container>
  );
}
