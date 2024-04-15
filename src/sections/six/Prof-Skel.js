import * as React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowForwardIosIcon  from '@mui/icons-material/ArrowForwardIos';
import SyncIcon from '@mui/icons-material/Sync';
import PasswordIcon from '@mui/icons-material/Password';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';


function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

  return (
    // ---------------------------------------------------------------------------------------------------------------
    <Paper elevation={6} className='w-auto h-auto m-4'>
    {/* // --------------------------------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around align-content-center p-2 ">
        <div className="justify-content-start align-self-center w-100 flex-fill p-3">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div>
              <Typography variant="h6" >Profile Setting</Typography>
              <Typography variant="button" display="block" >This setting will be apply on this Service</Typography>
            </div>
          )}
        </div>
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <MoreHorizOutlinedIcon />
            </IconButton>
          )
          }
        </div>
      </div>

      <div className='d-flex justify-content-start align-self-center'>
        <List className='w-100 !important' sx={style} />
      </div>
 {/* // --------------------------------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around align-content-center p-2 ">
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <SyncIcon />
            </IconButton>
          )
          }
        </div>
        <div className="justify-content-start align-self-center w-100 flex-fill p-3">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div>
              <Typography variant="h6" >Sync</Typography>
            </div>
          )}
        </div>
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon />
            </IconButton>
          )
          }
        </div>
      </div>
{/* // --------------------------------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around align-content-center p-2 ">
      <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <PasswordIcon />
            </IconButton>
          )
          }
        </div>
        <div className="justify-content-start align-self-center w-100 flex-fill p-3">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div>
              <Typography variant="h6" >Password Manager</Typography>
            </div>
          )}
        </div>
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon />
            </IconButton>
          )
          }
        </div>
      </div>
{/* // --------------------------------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around align-content-center p-2 ">
      <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              < ManageAccountsIcon/>
            </IconButton>
          )
          }
        </div>
        <div className="justify-content-start align-self-center w-100 flex-fill p-3">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div>
              <Typography variant="h6" >Profile Preference</Typography>
            </div>
          )}
        </div>
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon />
            </IconButton>
          )
          }
        </div>
      </div>
{/* // --------------------------------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around align-content-center p-2 ">
      <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <AccessibilityIcon/>
            </IconButton>
          )
          }
        </div>
        <div className="justify-content-start align-self-center w-100 flex-fill p-3">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div>
              <Typography variant="h6" >Accessibility</Typography>
            </div>
          )}
        </div>
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon />
            </IconButton>
          )
          }
        </div>
      </div>
{/* // --------------------------------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around align-content-center p-2 ">
      <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <ColorLensOutlinedIcon/>
            </IconButton>
          )
          }
        </div>
        <div className="justify-content-start align-self-center w-100 flex-fill p-3">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div>
              <Typography variant="h6" >Appearance</Typography>
            </div>
          )}
        </div>
        <div className="justify-content-end align-self-center flex-fill">
          {loading ? null : (
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon />
            </IconButton>
          )
          }
        </div>
      </div>
{/* // --------------------------------------------------------------------------------------------------------------- */}
    </Paper>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonChildren() {
  return (
    <SkeletonChildrenDemo />
  );
}