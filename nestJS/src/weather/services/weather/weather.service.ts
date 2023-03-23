import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
    WeatherDataRow,
    WeatherDataRowDto
} from 'src/weather/types/weather-data';

@Injectable()
export class WeatherService {
  constructor(
    @InjectModel('WeatherData')
    private readonly weatherDataModel: Model<WeatherDataRow>,
  ) {}

  async getAll(): Promise<WeatherDataRow[]> {
    return await this.weatherDataModel.find();
  }

  async create(weatherDataRow: WeatherDataRowDto[]) {
    if (!weatherDataRow?.length) {
      return;
    }
    for (const iterator of weatherDataRow) {
      const newData = new this.weatherDataModel(iterator);
      await newData.save();
    }
  }
}
