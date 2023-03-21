import { Component } from '@angular/core';
import {
  City,
  Country,
  WeatherByDate,
  WeatherData,
  WeatherDataRow,
} from '../../interface/weather-data.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-uploader-page',
  templateUrl: './uploader-page.component.html',
  styleUrls: ['./uploader-page.component.scss'],
})
export class UploaderPageComponent {
  countries: Country[] = [];
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
            weatherStatus: cols[7]?.replace('\r', ''),
            wind: cols[8]?.replace('\r', ''),
            airQuality: cols[9]?.replace('\r', ''),
          };
          this.data.push(rowData);
        }

        if (!this.data?.length) {
          return;
        }

        const groups = this.groupBy(
          this.data,
          (row: WeatherDataRow) => row.country
        );

        this.countries = [];
        for (const group of groups) {
          const country: Country = {
            id: group[1][0].id,
            name: group[0],
            cities: this.buildCities(group[1]),
          };
          if (country?.name && country?.cities) {
            this.countries.push(country);
          }
        }
        this.weatherService.setWeatherData(this.data);
        this.weatherService.setCountries(this.countries);
      };
    }
  }

  buildCities(rows: WeatherDataRow[]) {
    const cities: City[] = [];
    if (rows) {
      const citiesGroup = this.groupBy(rows, (row: WeatherDataRow) => row.city);
      for (const cityIterator of citiesGroup) {
        const city: City = {
          name: cityIterator[0],
          weatherByDate: this.buildWheatherByDate(cityIterator[1]),
        };
        cities.push(city);
      }
    }
    return cities;
  }

  buildWheatherByDate(rows: WeatherDataRow[]): WeatherByDate[] {
    const weatherByDates: WeatherByDate[] = [];
    if (rows) {
      const dataByDate = this.groupBy(rows, (row: WeatherDataRow) => row.date);
      for (const date of dataByDate) {
        const weatherByDate: WeatherByDate = {
          date: date[0],
          weatherData: this.buildWheatherData(date[1]),
        };
        weatherByDates.push(weatherByDate);
      }
    }
    return weatherByDates;
  }

  buildWheatherData(rows: WeatherDataRow[]): WeatherData[] {
    const weatherDatas: WeatherData[] = [];
    if (rows) {
      for (const row of rows) {
        const weatherData: WeatherData = {
          date: row.date,
          hour: row.hour,
          temperature: +row.temperature,
          humidity: +row.humidity,
          weatherStatus: row.weatherStatus,
          wind: +row.wind,
          airQuality: row.airQuality,
        };
        weatherDatas.push(weatherData);
      }
    }
    return weatherDatas;
  }

  groupBy(list: any[], keyGetter: any) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
}
