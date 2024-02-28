import { useEffect, useState } from "react";
import { useWeatherData } from "./hooks/weatherData";
import Spinner from "./components/Spinner/Spinner";
import { Hour } from "./interfaces/Api/hour";
import styles from "./app.module.css";
import Switch from "./components/switch/Switch";
import CardY from "./components/CardY/CardY";
import CardX from "./components/CardX/CardX";
import GraphCard from "./components/GraphCard/GraphCard";
import CurrentWeatherWidget from "./components/CurrentWeatherWidget/CurrentWeatherWidget";
import Compass from "./components/Compass/Compass";
import MainCard from "./components/MainCard/MainCard";
import Humidity from "./components/RainChance/RainChance";
import UVIndex from "./components/UVIndex/UVIndex";
import { Grid } from "@mui/material";
function App() {
  const [newlocation, setNewLocation] = useState<string>();
  const { weatherData, error, loading } = useWeatherData(newlocation);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");

  useEffect(() => {
    //handle debounce time in ms
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000); // milliseconds(1000=1s)

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);
  useEffect(() => {
    if (debouncedValue) {
      //calls service after debounced time
      setNewLocation(debouncedValue);
    }
  }, [debouncedValue]);
  const filterForecastHours = (hour: Hour[]) =>
    hour.filter((h) => new Date(h.time) > new Date());

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <Grid container  padding={2}>
          <Grid item md={8} sm={12} padding={2}> {/* left side */}
            <Grid container gap={2} >
              <Grid container display={'flex'} justifyContent={'space-between'}> {/* form search */}

                <Grid item md={10.7} sm={10.7} display={'flex'} flex={1} >{/* input */}
                  <form role="search" className={styles.form} >
                    <input
                      type="search"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      aria-label="Buscar lugar por ciudad o coordenadas en grados decimales"
                      placeholder="search for cities or coordinates"
                      className={styles.search_bar}
                    />
                  </form>
                </Grid>
                <Grid item display={"flex"} justifyContent={"flex-end"} p={0} md={1} sm={1}> 
                  <Switch
                    setTemperatureUnit={setTemperatureUnit}
                    temperatureUnit={temperatureUnit}
                  />
                </Grid>
              </Grid>
               {/* widget container */}
              <Grid container 
              className={styles.widgetContainer}
       
              p={2}>
               
              
                  <CurrentWeatherWidget
                    weatherForecast={weatherData}
                    temperatureUnit={temperatureUnit}
                  />
              
                <Grid item lg={6} md={12} sm={12} p={2} className={styles.card_content} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                  <GraphCard
                    hour={weatherData.forecast.forecastday[0].hour}
                    temperatureUnit={temperatureUnit}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} display={'flex'}>
                <Grid item md={6} sm={12} flex={1}>
                  <MainCard
                    title={"Wind"}
                    subTitle={"Today Wind speed"}
                    description={`${weatherData.current.wind_kph}Km/h`}
                  >
                    <Compass
                      size={60}
                      direction={weatherData.current.wind_dir}
                    />
                  </MainCard>
                </Grid>
                <Grid item md={6} sm={12} flex={1}>
                  <MainCard
                    title={"Wind"}
                    subTitle={"Today Wind speed"}
                    description={`${weatherData.current.wind_kph}Km/h`}
                  >
                    <Compass
                      size={60}
                      direction={weatherData.current.wind_dir}
                    />
                  </MainCard>
                </Grid>
                <Grid item md={6} sm={12} flex={1}>
                  <MainCard
                    title={"Humidity"}
                    subTitle={"Today Humidity"}
                    description={`${weatherData.current.humidity}`}
                  >
                    <Humidity percentage={weatherData.current.humidity} />
                  </MainCard>
                </Grid>
                <Grid item md={6} sm={12} flex={1}>
                  <MainCard
                    title="UV Index"
                    subTitle="Today UV Index"
                    description={`${weatherData.current.uv}`}
                  >
                    <UVIndex />
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        <Grid item md={4} sm={12}> 
          
             
              <Grid item md={12} sm={6} className={styles.slider}>
                {filterForecastHours(
                  weatherData.forecast.forecastday[0].hour
                ).map((hour, index) => (
                  <CardY
                    hour={hour}
                    temperatureUnit={temperatureUnit}
                    key={index}
                  />
                ))}
              </Grid>
           
                {weatherData.forecast.forecastday.map(
                  (forecastDay, index) =>
                    index > 0 && (
                      <CardX
                        forecastDay={forecastDay}
                        temperatureUnit={temperatureUnit}
                        key={index}
                      />
                    )
                )}
             
           
          </Grid> 
        </Grid>
      ) : null}
    </>
  );
}

export default App;
