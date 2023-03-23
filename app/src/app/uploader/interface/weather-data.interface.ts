import { AirQuality } from '../types/air-quality.enum';
import { WeatherStatus } from '../types/wather-status.enum';

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
  selected?: boolean;
}
export interface WeatherData {
  date: string;
  hour: string;
  temperature: number;
  humidity: number;
  weatherStatus: WeatherStatus;
  wind: number;
  airQuality: AirQuality;
}
export interface WeatherDataRow {
  id: string;
  country: string;
  city: string;
  date: string;
  hour: string;
  temperature: string;
  humidity: string;
  weatherStatus: WeatherStatus;
  wind: string;
  airQuality: AirQuality;
}
