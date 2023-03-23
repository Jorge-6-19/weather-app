import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  City, WeatherByDate,
  WeatherData,
  WeatherDataRow
} from '../interface/weather-data.interface';
import { WeatherHttpService } from './weather-http.service';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  protected readonly weatherDataSubject = new Subject<WeatherDataRow[]>();

  constructor(private weatherHttpService: WeatherHttpService) {}

  public setWeatherData(weatherData: WeatherDataRow[]): void {
    return this.weatherDataSubject.next(weatherData);
  }

  public getWeatherData$(): Observable<WeatherDataRow[]> {
    return this.weatherDataSubject.asObservable();
  }

  public getWeatherData(): void {
    this.weatherHttpService.getWeatherData$().subscribe({
      next: this.nextGetWeatherData,
      error: this.errorGetWeatherData,
    });
  }

  private nextGetWeatherData = (data: HttpResponse<any>): void => {
    const weatherData: WeatherDataRow[] = data.body.result;
    this.weatherDataSubject.next(weatherData);
  };

  private errorGetWeatherData = (error: HttpErrorResponse): void => {
    this.weatherDataSubject.next(null);
  };

  public createWeatherData(weatherData: WeatherDataRow[]): void {
    this.weatherHttpService.createWeatherData$(weatherData).subscribe({
      next: this.nextCreateWeatherData,
      error: this.errorCreateWeatherData,
    });
  }

  private nextCreateWeatherData = (data: HttpResponse<any>): void => {
    const weatherData: WeatherDataRow[] = data.body.result;
    this.weatherDataSubject.next(weatherData);
  };

  private errorCreateWeatherData = (error: HttpErrorResponse): void => {
    this.weatherDataSubject.next(null);
  };

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
