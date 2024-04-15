import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover'; // Import Popover
import Sear from './Sear';

export default function CallEntry() {
  const [anchorEl, setAnchorEl] = React.useState(null); // State for anchor element of popover
  const open = Boolean(anchorEl);

  const defaultValues = {
    Company: 'Company',
  };
  const company = [
    { value: 'Elecon', label: 'Elecon' },
    { value: 'Tech Elecon', label: 'Tech Elecon' },
  ];

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Paper className='d-flex flex-column justify-content-center m-3 p-3 w-100' elevation={3}>
        <div className='d-flex flex-row justify-content-center'>
          <Typography variant="h4" color="primary">Call Entry</Typography>
        </div>
        <Grid container className='w-auto m-3 ' rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <TextField className='w-100' name="Company" label="Select Company" select required>
              {company.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-EmployeeName" label="Employee Code" defaultValue="123 666" required />
          </Grid>
          <Grid item xs={6} className='d-flex flex-row'>
            <Button className='p-3 w-50 align-self-center' variant="outlined">Search</Button>
            <Typography className='p-3 align-self-center'>OR</Typography>
            <Button className='p-3 w-50 align-self-center' variant="outlined" onClick={handlePopoverOpen}>Search by Name</Button>
          </Grid>
        </Grid>
      </Paper>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Sear className='w-auto h-auto'  />
      </Popover>
    </div>
  );
}
