import { Component } from '@angular/core';
import {
  WeatherDataRow
} from '../../interface/weather-data.interface';
import { WeatherService } from '../../services/weather.service';
import { AirQuality } from '../../types/air-quality.enum';
import { WeatherStatus } from '../../types/wather-status.enum';

@Component({
  selector: 'app-uploader-page',
  templateUrl: './uploader-page.component.html',
  styleUrls: ['./uploader-page.component.scss'],
})
export class UploaderPageComponent {
  data: WeatherDataRow[] = [];
  constructor(private weatherService: WeatherService) {}

  onSelectedFileChange(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const content: any = reader.result;
        const rows: string[] = content.split('\n');
        if (rows?.length < 2) {
          return;
        }
        rows.splice(0, 1);
        this.data = [];
        for (let row of rows) {
          const cols: string[] = row.split(';');
          const rowData: WeatherDataRow = {
            id: cols[0]?.replace('\r', ''),
            country: cols[1]?.replace('\r', ''),
            city: cols[2]?.replace('\r', ''),
            date: cols[3]?.replace('\r', ''),
            hour: cols[4]?.replace('\r', ''),
            temperature: cols[5]?.replace('\r', ''),
            humidity: cols[6]?.replace('\r', ''),
            weatherStatus: cols[7]?.replace('\r', '') as WeatherStatus,
            wind: cols[8]?.replace('\r', ''),
            airQuality: cols[9]?.replace('\r', '') as AirQuality,
          };
          this.data.push(rowData);
        }
      };
    }
  }

  upload() {
    if (this.data?.length) {
      this.weatherService.createWeatherData(this.data);
    }
  }
}
