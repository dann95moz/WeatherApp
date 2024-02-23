import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import styles from './CustomTooltip.module.css'
interface TemperatureToolTipProps extends TooltipProps<ValueType, NameType>{
temperatureUnit: 'C'|'F'
}
export const CustomTooltip: React.FC<TemperatureToolTipProps> = ({ active, payload,temperatureUnit }) => {
 


    if (active && payload && payload.length) {
      return (
        <div className={styles.custom_tooltip}>
          <p className={styles.intro}>{`${payload[0].value}°${temperatureUnit }`}</p>
        </div>
      );
    }
  
    return null;
  };