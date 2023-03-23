import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherController } from './controllers/weather/weather.controller';
import { WeatherSchema } from './schemas/weather-schema';
import { WeatherService } from './services/weather/weather.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'WeatherData', schema: WeatherSchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
