import { WeatherForecast } from '../../interfaces/Api/weatherForecast'
import styles from './currentWeatherWidget.module.css'
interface Props{
    weatherForecast:WeatherForecast
   temperatureUnit:'C'|'F'
}
const CurrentWeatherWidget = ({weatherForecast, temperatureUnit}:Props) => {
    
  return (
    <section className={styles.widget_container}>
        <span className={styles.widget_header}>
        <h3>{weatherForecast.location.name}</h3>
        <h4>{new Date().toLocaleTimeString()}</h4>
        </span>
        <div className={styles.widget_weather_figure}>
        <figure >
            <img src={weatherForecast.current.condition.icon} alt={weatherForecast.current.condition.text} />
        </figure>
        <h1>{temperatureUnit==='C'?weatherForecast.current.temp_c:weatherForecast.current.temp_f}°{temperatureUnit}</h1>
        </div>
    <div>
        <h4>{weatherForecast.current.pressure_mb} mb</h4>
        <h4>{weatherForecast.current.wind_kph} kph</h4>
        
    </div>
    </section>
  )
}

export default CurrentWeatherWidget