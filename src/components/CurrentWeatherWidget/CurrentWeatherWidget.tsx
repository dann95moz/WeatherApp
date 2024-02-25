import { Grid } from '@mui/material'
import { WeatherForecast } from '../../interfaces/Api/weatherForecast'
interface Props{
    weatherForecast:WeatherForecast
   temperatureUnit:'C'|'F'
}
const CurrentWeatherWidget = ({weatherForecast, temperatureUnit}:Props) => {
    
  return (
    
    <Grid container >
        <Grid item md={12} display={'flex'} justifyContent={'space-between'}>
        <h3>{weatherForecast.location.name}</h3>
        <h4>{new Date().toLocaleTimeString()}</h4>
        </Grid>
        <Grid item md={12}>
          <Grid container display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Grid item md={12}>
              <figure >
            <img src={weatherForecast.current.condition.icon} alt={weatherForecast.current.condition.text}  width={136} height={136}/>
        </figure>
        </Grid>
        <Grid item md={12}>
        <h1>{temperatureUnit==='C'?weatherForecast.current.temp_c:weatherForecast.current.temp_f}°{temperatureUnit}</h1>

        </Grid>
          </Grid>
     
        </Grid>
    <Grid item md={12} display={'flex'} justifyContent={'space-between'} padding={2}>
        <h4>{weatherForecast.current.pressure_mb} mb</h4>
        <h4>{weatherForecast.current.wind_kph} kph</h4>
        
    </Grid>
    </Grid>
  )
}

export default CurrentWeatherWidget