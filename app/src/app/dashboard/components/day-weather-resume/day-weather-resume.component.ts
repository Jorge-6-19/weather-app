import { Component, Input } from '@angular/core';
import {
  WeatherByDate,
  WeatherData,
} from 'src/app/uploader/interface/weather-data.interface';

@Component({
  selector: 'app-day-weather-resume',
  templateUrl: './day-weather-resume.component.html',
  styleUrls: ['./day-weather-resume.component.scss'],
})
export class DayWeatherResumeComponent {
  @Input() date: string;
  @Input() weather: WeatherData;
}
