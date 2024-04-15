import * as React from 'react';
import Box from '@mui/material/Box';
import { Switch, Paper, Grid, TextField, MenuItem, Button, Typography, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import CallEntry from './CallEntry';

export default function ViewTables() {
  const defaultValues = {
    Problem: 'Problem',
    Territory: 'Territory',
    SName: 'Software Name',
    Organization: 'Organization',
    Divison: 'Divison',
    OModules: 'Oracle Modules',
  };

  const territory = [
    { value: 'Anand', label: 'Anand' },
    { value: 'New Vidhyanagar', label: 'New Vidhyanagar' },
  ];
  const soft = [
    { value: '16 Losses for TPM', label: '16 Losses for TPM' },
  ];
  const oracle = [
    { value: 'GST Issue', label: 'GST Issue' },
  ];
  const organization = [
    { value: 'Elecon Gear Divison', label: 'Elecon Gear Divison' },
  ];
  const divison = [
    { value: 'Elecon Gear Alternate Energy Divison', label: 'Elecon Gear Alternate Energy Divison' },
  ];

  const problem = [
    { value: 'System/Internet', label: 'System/Internet' },
    { value: 'Printer', label: 'Printer' },
    { value: 'Development Software/ Website', label: 'Development Software/ Website' },
    { value: 'ERP', label: 'ERP' },
    { value: 'Network/ CCTV', label: 'Network/ CCTV' },
    { value: 'Telephone', label: 'Telephone' },
  ];

  const [selectedProblem, setSelectedProblem] = React.useState('');

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
  };

  const inputRef = React.useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input click event
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file
    console.log('Selected file:', file);
  };

  const [showCallEntry, setShowCallEntry] = React.useState(false); // State for showing CallEntry component

  const handleSwitchChange = () => {
    setShowCallEntry((prev) => !prev); // Toggle the state when the switch is changed
  };

  return (
    <Box className='m-3 p-3 w-auto h-auto'>
      <div className='d-flex flex-row w-auto h-auto justify-content-center'>
      {showCallEntry && <CallEntry />}
      </div>
      <Paper className='d-flex flex-column m-3 p-3 w-auto' elevation={3}>
      <div className='d-flex flex-row justify-content-between'>
          <Switch checked={showCallEntry} onChange={handleSwitchChange} />
          <Typography variant="h6" color="primary">....</Typography>
        </div>
        <div className='d-flex flex-row justify-content-center'>
          <Typography variant="h4" color="primary"> Direct Call Entry  </Typography>
        </div>
        <Grid container className='w-auto m-3 ' rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-EmployeeName" label="Employee Name" defaultValue="Network" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-Department" label="Department" defaultValue="Network" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-HODName" label="HOD Name" defaultValue="Network" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-ExtNo" label="Ext No." defaultValue="Network" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-MobileNumber" label="Mobile Number" defaultValue="+91 23392 32982" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-Email" label="Email" defaultValue="Abc@123.gmail" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-CreateDateTime" label="Create Date and Time" defaultValue="08/04/2024, 11:23:57 am" required />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' id="outlined-IPAddress" label="IP Address" defaultValue="192.192.192.192" />
          </Grid>
          <Grid item xs={6}>
            <TextField className='w-100' name="Problem" label="Select Problem Type" select required value={selectedProblem} onChange={handleProblemChange}>
              {problem.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {!['Development Software/ Website', 'ERP'].includes(selectedProblem) && (
            <Grid item xs={6}>
              <TextField className='w-100' name="Territory" label="Select Territory" select required>
                {territory.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}
          {/* Additional text fields for Development Software/Website problem */}
          {selectedProblem === 'Development Software/ Website' && (
            <Grid item xs={6}>
              <TextField className='w-100' name="SName" label="Software Name" select required>
                {soft.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}
          {selectedProblem === 'ERP' && (
            <Grid item xs={6}>
              <TextField className='w-100' name="OModule" label="Oracle Modules" select required>
                {oracle.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}
          {['Development Software/ Website', 'ERP'].includes(selectedProblem) && (
            <>

              <Grid item xs={6}>
                <TextField className='w-100' name="Organization" label="Organization" select required>
                  {organization.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField className='w-100' name="Divison" label="Divison" select required>
                  {divison.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField className='w-100' name="Territory" label="Select Territory" select required>
                  {territory.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}
          {/* Your existing text fields */}
          <Grid item xs={12} >
            <TextField className='w-100' name="Problem Description" label="Problem Description" multiline rows={4} required />
          </Grid>
          {selectedProblem === 'ERP' && (
            <Grid item xs={12} >
              <div className='d-flex flex-row justify-content-between'>
              <Typography variant="h6" className='align-self-center'>Select Priority</Typography>
                <FormControl >
                  <RadioGroup
                    className='d-flex flex-row'
                    defaultValue="low"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="low" control={<Radio />} label="Low" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="high" control={<Radio />} label="High" />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
          )}
          {['Development Software/ Website', 'ERP'].includes(selectedProblem) && (
            <>
              <Grid item xs={6}>
                <TextField className='w-100' label="Responsible Employees Email to CC*" name="Responsible Employees Email to CC*" required />
              </Grid>
              <Grid item xs={6}>
                <div className='d-flex flex-row w-auto'>
                  <Button className='mx-5 px-5' variant="outlined">Search Email</Button>
                  <Typography className='mx-5 px-5 align-self-center'>OR</Typography>
                  <Button className='mx-5 px-5' variant="outlined">Add Email</Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                  <TextField label="Choose File" variant="outlined" className='w-100'
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <Button onClick={handleButtonClick} variant="outlined" component="span">
                          Browse
                        </Button>
                      ),
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='d-flex flex-row w-auto'>
                  <Button className='mx-5 p-3 align-self-center' variant="outlined">Add Attachment</Button>
                </div>
              </Grid>
            </>
          )}
          <Grid item xs={12} className='m-1'>
            <Button className='m-3' variant="contained" size="medium">Submit</Button>
            <Button className='m-3' variant="outlined" size="medium">Reset</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
