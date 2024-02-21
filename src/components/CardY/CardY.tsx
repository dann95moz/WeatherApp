import { Hour } from "../../interfaces/Api/hour"
import styles from './CardY.module.css'
interface CardProps {
  hour: Hour;
  temperatureUnit: string;
}
const CardY : React.FC<CardProps> = ({hour,temperatureUnit}) => {

  return (
    <div className={styles.card_sm_figure}  >
        <time dateTime={hour.time}>{ hour.time.split(' ')[1]}</time>
         <figure >
           <img src={hour.condition.icon} alt={hour.condition.text}/>
         </figure>
        
           <h5>{temperatureUnit==='C'?hour.temp_c:hour.temp_f}°{temperatureUnit}</h5>
       </div>
  )
}

export default CardY