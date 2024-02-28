import { Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'
import { CustomTooltip } from '../CustomToolTip/CustomTooltip'
import { Hour } from '../../interfaces/Api/hour'

import { useMediaQuery, useTheme } from '@mui/material'
import { Theme } from '@mui/system'
interface GraphCardProps{
    hour:Hour[],
    temperatureUnit:'C'| 'F'
    
}
const GraphCard = ({hour,temperatureUnit}:GraphCardProps) => {
  const theme = useTheme() as Theme;
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const quarterHours=['01:00','04:00','07:00','10:00','13:00','16:00','19:00','22:00']
 const formattedData= hour.map((hour)=>{
  
  return {...hour, shortTime: hour.time.split(' ')[1]}
 })
  
  return (
    
    < >
        <h3>How's the temperature today?</h3>
         <LineChart
            
              width={isSmallScreen?window.innerWidth*0.7:isMediumScreen ?window.innerWidth*0.75:window.innerWidth*0.27}
              height={180}
              data={formattedData}
            >
      <YAxis
              tick={false}
              axisLine={false}
              hide={true}
                dataKey={temperatureUnit==='C'?"temp_c":"temp_f"}
                domain={[
                  (dataMin: number) => dataMin - 1,
                  (dataMax: number) => dataMax + 1,
                ]}
              />
              <XAxis 
               tick={true}
                dataKey={'shortTime'}
               ticks={quarterHours}
               axisLine={false}
               stroke="#ffffff80"
               fontSize={'10px'}
           
               />
               {quarterHours.map((hour, index) => (
    <ReferenceLine x={hour} stroke="#ffffff80" key={index} 
    />
  ))}
          
              <Line type="natural"
               dataKey={temperatureUnit==='C'?"temp_c":"temp_f"} 
               stroke="rgba(97, 81, 195, 1)" 
               strokeWidth={4}
              dot={false}
              activeDot={{ r: 4 }}
              />
              <Tooltip content={<CustomTooltip temperatureUnit={temperatureUnit}/>} />
            </LineChart>
    </>
  )
}

export default GraphCard
