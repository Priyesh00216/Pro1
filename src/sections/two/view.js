// @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import { Grid } from '@mui/material';

// components
// import { mock_types_data } from 'src/_mock/_types';
import { useSettingsContext } from 'src/components/settings';
import MainDash from './MainDash';
// ----------------------------------------------------------------------

export default function TwoView() {

  return (
    <Container >
      <Typography variant="h4"> Total Calls </Typography>
       <MainDash/>
    </Container>
  );
}
