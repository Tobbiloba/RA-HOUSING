// @ts-nocheck
import ReactApexChart from 'react-apexcharts'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const PieChart = ({ title, value, series, colors, bg }) => {
  return (
    // <div className='shadow-white shadow-sm'>
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor={bg ? bg : '#fcfcfc'}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      minHeight="110px"
      width="100%"
      fontFamily="exo"
      
    >
      <Stack direction="column">
        <Typography fontSize={12} color={bg ? 'white' : '#808191'}>
          {title}
        </Typography>
        <Typography fontSize={18} color="#11142d" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: 'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
    // </div>
  )
}

export default PieChart
