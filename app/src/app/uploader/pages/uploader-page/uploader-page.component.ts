import { Component, OnInit } from '@angular/core';
import {
  City,
  Country,
  WeatherData,
  WeatherDataRow,
} from '../../interface/weather-data.interface';

@Component({
  selector: 'app-uploader-page',
  templateUrl: './uploader-page.component.html',
  styleUrls: ['./uploader-page.component.scss'],
})
export class UploaderPageComponent {
  countries: Country[] = [];
  data: WeatherDataRow[] = [];

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
            country: cols[0]?.replace('\r', ''),
            city: cols[1]?.replace('\r', ''),
            date: cols[2]?.replace('\r', ''),
            hour: cols[3]?.replace('\r', ''),
            temperature: cols[4]?.replace('\r', ''),
            humidity: cols[5]?.replace('\r', ''),
            weatherStatus: cols[6]?.replace('\r', ''),
            wind: cols[7]?.replace('\r', ''),
            airQuality: cols[8]?.replace('\r', ''),
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
            name: group[0],
            cities: this.buildCities(group[1]),
          };
          if (country?.name && country?.cities) {
            this.countries.push(country);
          }
        }
        console.log(this.countries);
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
          weatherData: this.buildWheatherData(cityIterator[1]),
        };
        cities.push(city);
      }
    }
    return cities;
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
