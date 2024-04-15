import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function Sear() {

  const defaultValues = {
    Company: 'Company',
  };
  const company = [
    { value: 'Elecon', label: 'Elecon' },
    { value: 'Tech Elecon', label: 'Tech Elecon' },
  ];

  return (
    <div>
      <Paper className='d-flex flex-column w-100' elevation={3}>
        <div className='d-flex flex-row justify-content-center'>
          <Typography variant="h4" color="primary">Search By Employee Name</Typography>
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
          <Grid item xs={12}>
            <TextField className='w-100' id="outlined-EmployeeName" label="Employee Name" defaultValue="John Doe" required />
          </Grid>
          <Grid item xs={12} className='d-flex flex-row justify-content-center'>
            <Button className='p-3 w-75 align-self-center' variant="outlined">Search Employee Name</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}