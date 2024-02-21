import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
interface TemperatureToolTipProps extends TooltipProps<ValueType, NameType>{
temperatureUnit: 'C'|'F'
}
export const CustomTooltip: React.FC<TemperatureToolTipProps> = ({ active, payload,temperatureUnit }) => {

 const formatTime = (time:string) => {
  
  const date = new Date(time);
  
   const options: Intl.DateTimeFormatOptions={
    hour: '2-digit', 
  minute: '2-digit', 
  hour12: false 
   }
   
 return  date.toLocaleTimeString(navigator.language,options)
 }
 


    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{formatTime(payload[0].payload.time)}</p>
          <p className="intro">{`Temp: ${payload[0].value}°${temperatureUnit }`}</p>
        </div>
      );
    }
  
    return null;
  };