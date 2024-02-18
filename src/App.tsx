import { useEffect, useState } from "react";
import { useWeatherData } from "./hooks/weatherData";
import Spinner from "./components/spinner/Spinner";
function App() {
  const [newlocation, setNewLocation] = useState<string>();

  const { weatherData, error, location, loading } = useWeatherData(newlocation);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

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
  console.log(location);
  console.log(Number.isNaN(location.split(",")[0]));

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

      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div className="content-container">
          <main>
           <h2>Today</h2>
            <section>
              <article>
                <h2>Título de la tarjeta</h2>
                <figure>
                  <img src="ruta-a-tu-imagen" alt="Descripción de la imagen" />
                  <figcaption>Texto relacionado con la imagen</figcaption>
                </figure>
                <p>Texto de la tarjeta</p>
              </article>
              {/* Repite el artículo para cada tarjeta */}
            </section>
         
            <section>
              <p>Texto adicional aquí</p>
            </section>
          </main>
          <div className="vertical-line"></div>
          <aside className="aside">
          <h3>Today</h3>
           <section className="card-sm-figure-container">
           
           {weatherData.forecast.forecastday[0].hour.map((hour,index)=>
        index<=3 &&  <div className="card-sm-figure">
        <time dateTime={hour.time}>{new Date(hour.time).toLocaleTimeString()}</time>
         <figure >
           <img src={hour.condition.icon} alt={hour.condition.text}/>
         </figure>
         <h5>{hour.temp_c}°C/{hour.temp_f}°F</h5>
       </div>
            )}
           </section>
            <section>
           {weatherData.forecast.forecastday.map((forecastDay,index)=>
        index>0 &&  <div className="card-horizontal">
        <h5 >{new Date(forecastDay.date).toLocaleDateString()}</h5>
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
