// @mui
// import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { Paper, Typography } from '@mui/material';


// components
import { useSettingsContext } from 'src/components/settings';
import Img from 'src/assets/Image/773869e9a1c1b6bc80927275e706f86f.jpg';
import AnalyticsWidgetSummary from './Ana-widget-summary';
import AnalyticsDash from './Ana-dashboard';

// ----------------------------------------------------------------------

export default function OverviewAnalyticsView() {
  const settings = useSettingsContext();

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'xl'} >
        <Paper elevation={2} className=' d-flex flex-row justify-content-around align-item-center h-auto w-100 p-3 m-3'>
          <Avatar className='m-3' sx={{ width: 200, height: 200 }} src={Img}alt="" />
          <Paper elevation={3} className='m-3 w-50 h-auto '>
            <div className='d-flex flex-column  m-3 p-1 '>
              <Typography variant="h4" className='align-self-center' color="primary">Personal Details</Typography>
              <div className='d-xl-inline-flex justify-content-between m-3'>
                <Typography variant="h5">Company:</Typography>
                <Typography variant="h6" >Tech Elecon</Typography>
              </div>
              <div className='d-xl-inline-flex justify-content-between m-3'>
                <Typography variant="h5">Role:</Typography>
                <Typography variant="h6" >Network</Typography>
              </div>
              <div className='d-xl-inline-flex justify-content-between m-3'>
                <Typography variant="h5">Account:</Typography>
                <Typography variant="h6" >demo@minimal.cc</Typography>
              </div>
            </div>
          </Paper>
        </Paper>
      </Container>

      <Container maxWidth={settings.themeStretch ? false : 'xl'} >
        <div className="d-flex flex-row justify-content-around align-self-center">
          <div className=" w-50 p-5">
            <AnalyticsWidgetSummary
              title="Added Tickets"
              total={135230}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          </div>

          <div className="w-50 p-5">
            <AnalyticsWidgetSummary
              title="Total Tickets"
              total={72332323}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          </div>

          <div className="w-50 p-5">
            <AnalyticsWidgetSummary
              title="Closed Tickets"
              total={234000}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            />
          </div>
        </div>


        <div className=" d-flex flex-row justify-content-around pt-5">
          <div className='pr-2 w-50'>
            <AnalyticsDash
              title="Raised Tickets During Time Period"
              subheader="(+43%) than last year"
              chart={{
                labels: [
                  '01/01/2003',
                  '02/01/2003',
                  '03/01/2003',
                  '04/01/2003',
                  '05/01/2003',
                  '06/01/2003',
                  '07/01/2003',
                  '08/01/2003',
                  '09/01/2003',
                  '10/01/2003',
                  '11/01/2003',
                ],
                series: [
                  {
                    name: 'Team A',
                    type: 'bar',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Team B',
                    type: 'line',
                    fill: 'solid',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: 'Team C',
                    type: 'line',
                    fill: 'solid',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ],
              }}
            />
          </div>
          <div className="pl-2 w-50">
            <AnalyticsDash

              title="Types of Tickets Raised"
              subheader="(+43%) than last year"
              chart={{
                labels: [
                  '01/01/2003',
                  '02/01/2003',
                  '03/01/2003',
                  '04/01/2003',
                  '05/01/2003',
                  '06/01/2003',
                  '07/01/2003',
                  '08/01/2003',
                  '09/01/2003',
                  '10/01/2003',
                  '11/01/2003',
                ],
                series: [
                  {
                    name: 'Hardware',
                    type: 'line',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Software',
                    type: 'line',
                    fill: 'solid',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: 'Oracle',
                    type: 'line',
                    fill: 'solid',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ],
              }}
            />
          </div>
        </div>
      </Container>
    </>
  );
}