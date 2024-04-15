import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';

// @mui - for table

// components
import Chart,{useChart} from 'src/components/chart';
// ----------------------------------------------------------------------

export default function AnalyticsWebsiteVisits({ title, subheader, chart, ...other }) {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
      pie: {
        innerRadius: '0%',
        outerRadius: '60%',
      },
      donut: {
        innerRadius: '40%',
        outerRadius: '60%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} visits`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
  <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

    <Box>
          <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

AnalyticsWebsiteVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
