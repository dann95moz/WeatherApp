import styles from './GraphCard.module.css'
import { Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'
import { CustomTooltip } from '../CustomToolTip/CustomTooltip'
import { Hour } from '../../interfaces/Api/hour'
interface GraphCardProps{
    hour:Hour[],
    temperatureUnit:'C'| 'F'
    
}
const GraphCard = ({hour,temperatureUnit}:GraphCardProps) => {
  const quarterHours=['02:00','05:00','08:00','11:00','14:00','17:00','20:00',]
 const formattedData= hour.map((hour)=>{
  console.log(hour.time);
  
  return {...hour, shortTime: hour.time.split(' ')[1]}
 })


 console.log('formatted',formattedData);
 
 

  
  



  
  return (
    
    <div className={styles.card_content}>
        <h2>How's the temperature today?</h2>
         <LineChart
              width={500}
              height={200}
              data={formattedData}
            >
     
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
    </div>
  )
}

export default GraphCard
