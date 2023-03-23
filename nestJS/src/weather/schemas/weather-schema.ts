import { Schema } from 'mongoose';

export const WeatherSchema = new Schema({
  id: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  date: {
    type: Date,
  },
  hour: {
    type: String,
  },
  temperature: {
    type: Number,
  },
  humidity: {
    type: Number,
  },
  wind: {
    type: Number,
  },
  weatherStatus: {
    type: String,
  },
  airQuality: {
    type: String,
  },
});
