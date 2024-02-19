import { useEffect, useState } from "react";
import { useWeatherData } from "./hooks/weatherData";
import Spinner from "./components/spinner/Spinner";
import { Hour } from "./interfaces/Api/hour";
import { useGetDayName } from "./hooks/getDayName";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CustomTooltip } from "./components/customToolTip/CustomTooltip";
import Switch from "./components/switch/Switch";
function App() {
  const [newlocation, setNewLocation] = useState<string>();

  const { weatherData, error, loading } = useWeatherData(newlocation);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const getUserLocale = navigator.language ;
  
  
  const getDayName = useGetDayName()
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
const filterForecastHours = (hour:Hour[]) => 
  hour.filter((h)=>new Date(h.time)> new Date())
  const formatTime = (time:string) => {
    return  `${time.split(':')[0]}:${time.split(':')[2]}`
   }
  return (
    <div className="container">
       <h1>Weather App</h1>
      <form role="search" className="form">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Buscar lugar por ciudad o coordenadas en grados decimales"
          placeholder="search for cities or coordinates"
          className="search-bar"
        />
      </form>
      <Switch initialValue="C"/>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div className="content-container">
          <main>
          <LineChart width={400} height={400}   data={weatherData.forecast.forecastday[0].hour}>

            <YAxis dataKey="temp_c"  domain={[(dataMin:number) => (dataMin - 1), (dataMax:number) => (dataMax + 1)]} />
            <XAxis tick={false}/>
      <Line type="natural" dataKey="temp_c" stroke="#8884d8" />
      {/* <Line type="natural" dataKey="temp_f" stroke="#84d8a7" /> */}
      <Tooltip content={CustomTooltip}/>
          </LineChart>
          </main>
          <div className="vertical-line"></div>
          <aside className="aside">
          <h3>Today</h3>
           <section className="card-sm-figure-container">
           
           {filterForecastHours(weatherData.forecast.forecastday[0].hour).map((hour,index)=>
        index<=3 &&  <div className="card-sm-figure" key={index}>
        <time dateTime={hour.time}>{ formatTime (new Date(hour.time).toLocaleTimeString())}</time>
         <figure >
           <img src={hour.condition.icon} alt={hour.condition.text}/>
         </figure>
         <h5>{hour.temp_c}°C/{hour.temp_f}°F</h5>
       </div>
            )}
           </section>
            <section>
           {weatherData.forecast.forecastday.map((forecastDay,index)=>
        index>0 &&  <div className="card-horizontal" key={index}>
        <h5 >{getDayName(getUserLocale,new Date(forecastDay.date)) }</h5>
         <h5>{forecastDay.day.avgtemp_c}°C/{forecastDay.day.avgtemp_f}°F</h5>
         <figure >
           <img src={forecastDay.day.condition.icon} alt={forecastDay.day.condition.text}/>
         </figure>
       </div>
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
        </div>
      ) : null}
    </div>
  );
}

export default App;
