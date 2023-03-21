export interface Country {
  id: string;
  name: string;
  cities: City[];
}
export interface City {
  name: string;
  weatherByDate: WeatherByDate[];
}
export interface WeatherByDate {
  date: string;
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
  id: string;
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
