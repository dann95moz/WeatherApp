import { Hour } from "../../interfaces/Api/hour"
import styles from './CardY.module.css'
interface CardProps {
  hour: Hour;
  temperatureUnit: string;
}
const CardY  = ({hour,temperatureUnit}:CardProps) => {

  return (
    <div className={styles.card_sm_figure}  >
        <time dateTime={hour.time}>{ hour.time.split(' ')[1]}</time>
         <figure >
           <img src={hour.condition.icon} alt={hour.condition.text} width={40}/>
         </figure>
        
           <h5>{temperatureUnit==='C'?hour.temp_c:hour.temp_f}°{temperatureUnit}</h5>
       </div>
  )
}

export default CardY