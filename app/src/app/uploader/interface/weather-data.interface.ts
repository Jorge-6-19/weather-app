export interface Country {
  name: string;
  cities: City[];
}
export interface City {
  name: string;
  weatherData: WeatherData[];
}
export interface WeatherData {
  date: string;
  hour: string;
  temperature: number;
  humidity: number;
  weatherStatus: string;
  wind: number;
  airQuality: string;
}
export interface WeatherDataRow {
    country: string;
    city: string;
    date: string;
    hour: string;
    temperature: string;
    humidity: string;
    weatherStatus: string;
    wind: string;
    airQuality: string;
}
