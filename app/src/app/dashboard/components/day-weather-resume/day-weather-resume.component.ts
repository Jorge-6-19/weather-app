import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherByDate } from 'src/app/uploader/interface/weather-data.interface';

// date component range with weather minimum and maximum
@Component({
  selector: 'app-day-weather-resume',
  templateUrl: './day-weather-resume.component.html',
  styleUrls: ['./day-weather-resume.component.scss'],
})
export class DayWeatherResumeComponent implements OnChanges {
  @Input() weatherByDate: WeatherByDate;
  @Input() selected: boolean;

  minWind: number;
  maxWind: number;

  minTemperature: number;
  maxTemperature: number;

  minHumidity: number;
  maxHumidity: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.weatherByDate?.currentValue) {
      this.calculateMinsAndMax();
    }
  }

 // find the minimum and maximum in the array weatherData already grouped by date
  calculateMinsAndMax() {
    if (this.weatherByDate?.weatherData?.length) {
      const weatherData = this.weatherByDate?.weatherData;

      this.minHumidity = Math.min(...weatherData.map((item) => item.humidity));
      this.maxHumidity = Math.max(...weatherData.map((item) => item.humidity));

      this.minTemperature = Math.min(
        ...weatherData.map((item) => item.temperature)
      );
      this.maxTemperature = Math.max(
        ...weatherData.map((item) => item.temperature)
      );

      this.minWind = Math.min(...weatherData.map((item) => item.wind));
      this.maxWind = Math.max(...weatherData.map((item) => item.wind));
    }
  }
}
