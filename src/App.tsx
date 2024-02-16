import {  useEffect, useState } from "react";
import { useWeatherData } from "./hooks/weatherData";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [newlocation, setNewLocation] = useState<string>();
  

  const { weatherData, error,location,loading } = useWeatherData(newlocation);
const [inputValue, setInputValue] = useState('')
const [debouncedValue, setDebouncedValue] = useState('');



 useEffect(() => { //handle debounce time in ms
  const handler = setTimeout(() => {
    setDebouncedValue(inputValue);
  }, 1000); // milliseconds(1000=1s)

  return () => {
    clearTimeout(handler); 
  };
}, [inputValue]);
useEffect(() => {
  if (debouncedValue) { //calls service after debounced time
    setNewLocation(debouncedValue);
  }
}, [debouncedValue]);
console.log(location);
console.log(Number.isNaN(location.split(',')[0]));

  return (
    <div>
       <form role="search">
      <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} aria-label="Buscar lugar por ciudad o coordenadas en grados decimales" placeholder="search for cities or coordinates" />
    </form>

    
      {loading ? (
       <Spinner/> 
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
                <aside>
   
    <figure>
      <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
      <figcaption>{weatherData.current.condition.text}</figcaption>
    </figure>
    <time dateTime={weatherData.current.last_updated}>{weatherData.current.last_updated}</time>
    <hr />
    <article>
 
      <figure>
        <img src="ruta-a-tu-imagen" alt="Descripción de la imagen" />
        <figcaption>Texto relacionado con la imagen</figcaption>
      </figure>
      <figure>
        <img src="ruta-a-tu-imagen" alt="Descripción de la imagen" />
        <figcaption>Texto relacionado con la imagen</figcaption>
      </figure>
    </article>
    <section>
      <p>Texto adicional aquí</p>
    </section>
  </aside>
  <main>
    <h1>Título del contenido principal</h1>
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
  </main>
          {/* sidebar */}
          {/* main content */}
          {weatherData.location.name}
          {weatherData.current.condition.text}
          <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
