import { Current } from "./current";
import { Forecast } from "./forecast";
import { Location } from "./location";

export interface WeatherForecast {
    location: Location;
    current:  Current;
    forecast: Forecast;
}










