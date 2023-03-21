import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { City, Country, WeatherData, WeatherDataRow } from '../interface/weather-data.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  protected readonly weatherDataSubject = new Subject<WeatherDataRow[]>();
  protected readonly countriesSubject = new BehaviorSubject<Country[]>(null);

  constructor() { }
  public getWeatherData(): Observable<WeatherDataRow[]> {
    return this.weatherDataSubject.asObservable();
  }
  public setWeatherData(weatherData: WeatherDataRow[]): void {
    return this.weatherDataSubject.next(weatherData);
  }
 
  public getCountries(): Observable<Country[]> {
    return this.countriesSubject.asObservable();
  }
  public setCountries(countries: Country[]): void {
    return this.countriesSubject.next(countries);
  }
}
