// @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSettingsContext } from 'src/components/settings';
import SolvedTicket from './Das-SolvedTicket';
// import TicketTable from 'src/components/table/UserTable';
// import data from '../../assets/data/dummy-data.json';


// ----------------------------------------------------------------------

export default function FourView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Your Calls </Typography>
      <Grid maxWidth="xs" marginTop={2}>
        <SolvedTicket/>
      {/* <TicketTable data={data}/> */}
      </Grid>
    </Container>
  );
}
