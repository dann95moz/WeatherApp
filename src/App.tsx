import { useEffect, useState } from "react";
import { useWeatherData } from "./hooks/weatherData";
import Spinner from "./components/Spinner/Spinner";
import { Hour } from "./interfaces/Api/hour";
import styles from './app.module.css'
import Switch from "./components/switch/Switch";
import CardY from "./components/CardY/CardY";
import CardX from "./components/CardX/CardX";
import GraphCard from "./components/GraphCard/GraphCard";
import CurrentWeatherWidget from "./components/CurrentWeatherWidget/CurrentWeatherWidget";
import Compass from "./components/Compass/Compass";
import MainCard from "./components/MainCard/MainCard";
import Humidity from "./components/RainChance/RainChance";
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
    
      <div className={styles.container}>
        
     
     
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <>
        <div className={styles.content_container}>
         <form role="search" className={styles.form}>
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Buscar lugar por ciudad o coordenadas en grados decimales"
          placeholder="search for cities or coordinates"
          className={styles.search_bar}
        />
         <Switch
        setTemperatureUnit={setTemperatureUnit}
        temperatureUnit={temperatureUnit}
      />
      </form>
          <main>
            <div className={styles.graph_Card_Container}>
            <CurrentWeatherWidget 
            weatherForecast={weatherData}
            temperatureUnit={temperatureUnit}/>
            <GraphCard  hour={weatherData.forecast.forecastday[0].hour} temperatureUnit={temperatureUnit}/>
            </div>
          </main>
          <div className={styles.main_cards_container}>
       <MainCard
        title={'Wind'}
       subTitle={"Today Wind speed"}
       description={`${weatherData.current.wind_kph}Km/h`}
       >
<Compass size={60} direction={weatherData.current.wind_dir}/>
       </MainCard>
       <MainCard
        title={'Wind'}
       subTitle={"Today Wind speed"}
       description={`${weatherData.current.wind_kph}Km/h`}
       >
<Compass size={60} direction={weatherData.current.wind_dir}/>
       </MainCard>
       <MainCard
        title={'Wind'}
       subTitle={"Today Wind speed"}
       description={`${weatherData.current.wind_kph}Km/h`}
       >
<Compass size={60} direction={weatherData.current.wind_dir}/>
       </MainCard>
       <MainCard
        title={'Humidity'}
       subTitle={'Today Humidity'}
       description={`${weatherData.current.humidity}`}
       >
        <Humidity percentage={weatherData.current.humidity}/>
       </MainCard>
       </div>
        </div>
 
          
          <aside className={styles.aside}>
            <h3>Today</h3>
            <section className={styles.card_sm_figure_container}>
              {filterForecastHours(
                weatherData.forecast.forecastday[0].hour
              ).map((hour, index) => 
               <CardY
                hour={hour}
                 temperatureUnit={temperatureUnit}
                  key={index}/>
                  )}
            </section>
            <section>
              {weatherData.forecast.forecastday.map(
                (forecastDay, index) =>
                  index > 0 && (
               <CardX 
              forecastDay={forecastDay}
              temperatureUnit={temperatureUnit}
              key={index}/>
                  )
              )}
            </section>
          </aside>
          {/* sidebar */}
          {/* main content */}
          {/* {weatherData.location.name}
          {weatherData.current.condition.text}
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          /> */}
       </>
      ) : null}

    </div>
  
  );
}

export default App;
