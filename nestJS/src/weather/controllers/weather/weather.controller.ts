import {
    Body, Controller, Get, HttpStatus, Post,
    Res
} from '@nestjs/common';
import { WeatherService } from 'src/weather/services/weather/weather.service';
import { WeatherDataRowDto } from 'src/weather/types/weather-data';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post('/')
  async create(@Res() res, @Body() weatherDtos: WeatherDataRowDto[]) {
    await this.weatherService.create(weatherDtos);
    return res.status(HttpStatus.CREATED).json({
      message: 'Weather created successfully',
      result: [],
    });
  }

  @Get('/')
  async getAll(@Res() res) {
    const weatherData = await this.weatherService.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: weatherData,
    });
  }
}
