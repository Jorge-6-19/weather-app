import { Document } from 'mongoose';

export interface WeatherDataRowDto {
  id: string;
  country: string;
  city: string;
  date: string;
  hour: string;
  temperature: number;
  humidity: number;
  weatherStatus: string;
  wind: number;
  airQuality: string;
}


export interface WeatherDataRow extends Document {
  readonly _id: string;
  readonly id: string;
  readonly country: string;
  readonly city: string;
  readonly date: string;
  readonly hour: string;
  readonly temperature: number;
  readonly humidity: number;
  readonly weatherStatus: string;
  readonly wind: number;
  readonly airQuality: string;
}
