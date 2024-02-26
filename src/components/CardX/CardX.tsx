import { Forecastday } from '../../interfaces/Api/forecastday'
import { useGetDayName } from '../../hooks/getDayName';
import { Grid } from '@mui/material';
const getUserLocale = navigator.language;
interface CardXProps{
  forecastDay:Forecastday;
  temperatureUnit: 'C'| 'F'
}
const CardX = ({forecastDay,temperatureUnit}:CardXProps) => {
    const getDayName = useGetDayName();    
  return (
    <Grid item md={12} display={'flex'} justifyContent={'space-between'}>
                      <h5>
                        {getDayName(getUserLocale, new Date(forecastDay.date))}
                      </h5>
                      <h5>
                        {`${temperatureUnit==='C'?forecastDay.day.avgtemp_c:forecastDay.day.avgtemp_f}°${temperatureUnit}`}
                      </h5>
                      <figure>
                        <img
                          src={forecastDay.day.condition.icon}
                          alt={forecastDay.day.condition.text}
                        />
                      </figure>
                    </Grid>
  )
}

export default CardX