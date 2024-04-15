import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from 'src/components/hook-form/form-provider';
import { RHFTextField } from 'src/components/hook-form';
import { Alert, AlertTitle, Box, Card, Grid, Stack, Typography, Checkbox, FormGroup, FormControlLabel, Button, MenuItem, List } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function CallForm() {
  const [done, setDone] = useState(false);

  const YourComponent = () => {
    const [showPartsCheckboxes, setShowPartsCheckboxes] = useState(false);
    const [showAdditionalCheckboxes, setShowAdditionalCheckboxes] = useState(false);
    const [showAdditionalForm, setShowAdditionalForm] = useState(false);

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;

      if (name === 'pending' && checked) {
        setShowPartsCheckboxes(false);
        setShowAdditionalCheckboxes(true);
        setShowAdditionalForm(false); // Hide the additional form when changing checkboxes
      } else if (name === 'closed' && checked) {
        setShowPartsCheckboxes(true);
        setShowAdditionalCheckboxes(false);
        setShowAdditionalForm(false); // Hide the additional form when changing checkboxes
      } else {
        // If another checkbox is checked, reset all states
        setShowPartsCheckboxes(false);
        setShowAdditionalCheckboxes(false);
        setShowAdditionalForm(false);
      }
    };

    const handlePartsCheckboxChange = (event) => {
      setShowAdditionalForm(event.target.checked);
    };

    const NewTypesSchema = Yup.object().shape({
      first_name: Yup.string().max(50).required('Types Name is required'),
    });

    const methods = useForm({
      resolver: yupResolver(NewTypesSchema),
    });

    const {
      handleSubmit,
      formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
      try {
        console.log('data', data);
      } catch (error) {
        alert('Check your internet connectivity');
        console.log('error in handleSubmit of Add Categories');
        console.log('error: ', error);
      }
    });

    const defaultValues = {
      CSelect: 'Select Company',
    };

    const company = [
      {
        value: 'ABC',
        label: 'ABC',
      },
      {
        value: 'DEF',
        label: 'DEF',
      },
      {
        value: 'GHI',
        label: 'GHI',
      },
    ];

    const style = {
      py: 0,
      width: '100%',
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'divider',
      backgroundColor: 'background.paper',
    };

    return (
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid xs={20} md={15} className='d-flex justify-content-center w-auto h-auto'>
          <Card sx={{ p: 1 }} className='w-50 h-auto opacity-25'>
            <Box className='d-flex flex-column m-3 p-3'>
              <div className='d-flex flex-row justify-content-center m-3 p-3'>
                <Typography variant="h4" color="primary">Attend Call</Typography>
              </div>
              <RHFTextField className='m-3' label="Call Number" name="Call Number" />
              <div className='d-flex flex-row justify-content-between'>
                <Typography className='m-3' variant="body1"> Action* </Typography>
                <FormGroup className='d-flex flex-row'>
                  <FormControlLabel
                    control={<Checkbox name="pending" onChange={handleCheckboxChange} />}
                    label="Pending"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Checkbox name="closed" onChange={handleCheckboxChange} />}
                    label="Closed"
                    labelPlacement="end"
                  />
                </FormGroup>
              </div>

              {showPartsCheckboxes && (
                <div className='d-flex flex-row justify-content-between'>
                  <Typography className='m-3' variant="body1">Select* </Typography>
                  <FormGroup className='d-flex flex-row'>
                    <FormControlLabel
                      control={<Checkbox onChange={handlePartsCheckboxChange} />}
                      label="With Parts"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Without Parts"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </div>
              )}
              {showAdditionalCheckboxes && (
                <FormGroup className='d-flex flex-column m-3'>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Pending for customer approval"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="User not available"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Pending for part"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Under observation"
                    labelPlacement="end"
                  />
                  <div className='d-flex flex-row'>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Stend Provides =>"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Yes"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="No"
                      labelPlacement="end"
                    />
                  </div>
                </FormGroup>
              )}
              <List className=' mx-3 w-100 !important' sx={style} />
              {showAdditionalForm && (
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="DC No." name="DC No." />
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="Date" name="Date" />
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="Issue No." name="Issue No." />
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="Gate Pass No." name="Gate Pass No." />
                  </Grid>


                  <Grid item xs={6}>
                  <RHFTextField className='m-3' name="CSelect" label="Select Part" select>
                  {company.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem> ))}
                </RHFTextField>
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="Total Price" name="Total Price" />
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="Parts Per Price" name="Parts Per Price" />
                  </Grid>
                  <Grid item xs={6}>
                    <RHFTextField className='m-3' label="Amount" name="Amount" />
                  </Grid>
                </Grid>
              )}
            <List className=' mx-3 w-100 !important' sx={style} />

              <RHFTextField className='m-3' label="Solution" name="Solution" />
              <RHFTextField className='m-3' label="Remark" name="Remark" required />
              <div className='d-flex flex-row justify-content-start'>
                <RHFTextField className='m-3 w-50 align-self-center' label="Responsible Employees Email to CC*" name="Responsible Employees Email to CC*" required />
                <Button className='m-3 align-self-center' variant="outlined">Search Email</Button>
                <Typography className='m-3 align-self-center'>OR</Typography>
                <Button className='m-3 align-self-center' variant="outlined">Add Email</Button>
              </div>
              <div className='d-flex flex-row justify-content-start'>
                <RHFTextField
                  className='m-3 w-50 align-self-center'
                  name="CSelect"
                  label="Forward"
                  select
                >
                  {company.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </RHFTextField>
                <Button className='m-3 align-self-center' variant="outlined" size="medium">Forward</Button>
              </div>
            </Box>
            {done && (
              <Alert severity="success">
                <AlertTitle>Success </AlertTitle>
                onSubmit Types has been added!
              </Alert>
            )}

            <Stack className='d-flex flex-row justify-content-center m-3 p-3'>
              <LoadingButton className='m-3' type="submit" variant="outlined" loading={isSubmitting} >
                Submit
              </LoadingButton>
              <LoadingButton className='m-3' type="reset" variant="outlined" >
                Reset
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </FormProvider>
    );
  }

  return <YourComponent />;
}

export default CallForm;
