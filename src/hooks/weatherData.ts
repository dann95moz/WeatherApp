import { useEffect, useState } from "react";
import { WeatherForecast } from "../interfaces/Api/weatherForecast";
import { getWeatherData } from "../services/getForecast";

export const useWeatherData = (params?: string) => {
  const [weatherData, setWeatherData] = useState<WeatherForecast | null>(null);
  const [loading, setLoading] = useState(false); // Nuevo estado para manejar la carga
  const [error, setError] = useState<string>("");
  const [location, setLocation] = useState<string >('');
  const [geoError, setGeoError] = useState<string>("");

  useEffect(() => {
    if (!params  && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            `${position.coords.latitude},${position.coords.longitude}`
          );
      
        },
        (error) => {
          setGeoError(`Error obtaining location: ${error.message}`);
          console.error(`Error obtaining location: ${error.message}`);
        }
      );
    }else if(params){
      setLocation(params)
    }
     else {
      setGeoError("Lat Long was not Provided and Geolocation is not supported by this browser.");
      console.error("Lat Long was not Provided and Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true); // starts loading
      const dataParams= // if params then params else location (else null || undefined)
          params?
          params
        : location 
      

      try {
        const data = await getWeatherData(dataParams);
        setWeatherData(data);
        setError('')
      } catch (error) {
        setError("Error getting data");
        console.error(error);
      } finally { //stops loading
        setLoading(false); 
      }
    };

    fetchWeatherData();
  }, [params, location]);

  return { weatherData, loading, error, geoError }; 
};
