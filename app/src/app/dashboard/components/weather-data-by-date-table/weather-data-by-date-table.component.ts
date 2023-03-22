import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/uploader/interface/weather-data.interface';

@Component({
  selector: 'app-weather-data-by-date-table',
  templateUrl: './weather-data-by-date-table.component.html',
  styleUrls: ['./weather-data-by-date-table.component.scss'],
})
export class WeatherDataByDateTableComponent {
  @Input() data: WeatherData[] = [];
}
