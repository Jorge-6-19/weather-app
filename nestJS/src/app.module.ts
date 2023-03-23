import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    WeatherModule,
    MongooseModule.forRoot(
      'mongodb+srv://weather_user:fbwGIO2iXzcdlAbd@cluster0.sqja3nd.mongodb.net/weather',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
