import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import  Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
// import Box from '@mui/material/Box';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/auth/jwt/login?returnTo=%2Fdashboard'); 
  };
  
  return (
    <Paper elevation={6} className='w-auto h-auto m-4'>
    <div className="d-flex justify-content-around align-content-center">
      <div className=" justify-content-start align-self-center w-auto p-3 flex-fill">
      {loading ? (
            <Skeleton  variant="circular" >
              <Avatar  />
            </Skeleton>
          ) : (
            <Avatar src="https://img.freepik.com/premium-photo/smiling-asian-student-holding-laptop-looking-camera-university-campus-education-concept_219285-840.jpg?w=360" />
          )}
      </div>
      <div className="justify-content-start align-self-center w-75 flex-fill">
          {loading ? (
            <Skeleton variant="text"/>
          ) : (
            <div>
            <Typography variant="h6" >Personal</Typography>
            <Typography variant="button" display="block" >demo@minimals.cc</Typography>
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
      <div className="justify-content-center align-self-center m-3 flex-fill">
          {loading ? null : (
            <Button variant="outlined" className='px-5' onClick={handleClick} >Sign Out</Button>
          )
        }
      </div>
    </div>
      <div className='d-flex justify-content-start align-self-center px-3'>
        <List className='w-100 !important' sx={style}/>
      </div>
    <div className='d-flex justify-content-start px-3'>
            <div className="justify-content-end align-self-center my-2 px-2">
                {loading ? null : (
                  <IconButton aria-label="settings">
                    <ManageAccountsOutlinedIcon />
                  </IconButton>
                )
              }
            </div>
            <div className=" align-self-center w-auto my-2 px-2">
                {loading ? (
                  <Skeleton variant="text"/>
                ) : (
                  <Typography variant="h6" component="h5">Manage Account</Typography>
                )}
            </div>
      </div>
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

  //   return (
  //     <div className="d-flex flex-column">
  //       <Skeleton className="position-sticky m-2" variant="text" sx={{ fontSize: '12rem' }}/>
  //       <Skeleton className="z-1 m-2" variant="circular" width={120} height={120} />
  //       <Skeleton className="m-2" variant="rectangular" width={210} height={60} />
  //       <Skeleton className="m-2" variant="rounded" width={210} height={60} />
  //     </div>
  //   );