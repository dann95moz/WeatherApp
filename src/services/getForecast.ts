import { api } from '../axios/axiosConfig';
import { WeatherForecast } from '../interfaces/Api/weatherForecast';

export const getWeatherData = async (params:string | null): Promise<WeatherForecast> => {
  console.log(params);
  
  const location = params? params:  'New York';
  try {
    const response = await api.get(`/forecast.json`, { params: { q: location } });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching data: ${error.message}`);
    } else {
      console.error(`An unknown error occurred: ${error}`);
    }
    throw error;
  }
};
