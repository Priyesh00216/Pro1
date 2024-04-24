import * as React from 'react';
// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
// components
import { useSettingsContext } from 'src/components/settings';
import AccountSkeleton from './Acc-Skel';
import ProfileSkeleton from './Prof-Skel'

// ----------------------------------------------------------------------
const icon = (
  <div>
     <AccountSkeleton/>
      <ProfileSkeleton/>
  </div>
);

export default function SixView() {
  const settings = useSettingsContext();

  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" className='p-3'> User Account </Typography>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />}
      label="Show"/>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
      {icon}
      </Slide>
  </Container>
  );
}
