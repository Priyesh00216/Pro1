import React, { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import PendingTicket from './PendingTick';
import ResolvedTicket from './ResolvedTick';
import CloseTicket from './CloseTick';
import CallForm from './CallForm';

export default function MainDash() {
  const [showPending, setShowPending] = useState(false);
  const [showResolved, setShowResolved] = useState(false);
  const [showClose, setShowClose] = useState(false);

  return (
    <>
      <div className='d-flex flex-column justify-content-center m-2 p-2 w-100 '>
        <FormProvider>
          <TextField
            className='m-3 w-50 align-self-center'
            label="Tables"
            select
          >
            <MenuItem
              onClick={() => setShowPending(!showPending)}
              key="Pending"
              value="Pending Call"
            >
              Pending Call
            </MenuItem>

            <MenuItem
              onClick={() => setShowResolved(!showResolved)}
              key="Resolved"
              value="Resolved Call"
            >
              Resolved Call
            </MenuItem>

            <MenuItem
              onClick={() => setShowClose(!showClose)}
              key="Close"
              value="Close Call"
            >
              Close Call
            </MenuItem>
          </TextField>
        </FormProvider>
      </div>
      <div>
        {showPending && <PendingTicket />}
        {showResolved && <ResolvedTicket />}
        {showClose && <CloseTicket />}
        <CallForm />
      </div>
    </>
  );
}
