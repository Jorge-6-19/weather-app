import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiWeatherEnv } from 'src/environments/environment';
import { WeatherDataRow } from '../interface/weather-data.interface';
@Injectable({
  providedIn: 'root',
})

export class WeatherHttpService {
  constructor(private http: HttpClient) {}
 // use the http to call node-js (api) to insert the data
  public createWeatherData$(
    weatherData: WeatherDataRow[]
  ): Observable<HttpResponse<any>> {
    const url = `${apiWeatherEnv.baseUrl}/weather`;
    return this.http.post(url, weatherData, { observe: 'response' });
  }
 // use the http to call node-js (api) to extract the data
  public getWeatherData$(): Observable<HttpResponse<any>> {
    const url = `${apiWeatherEnv.baseUrl}/weather`;
    return this.http.get(url, { observe: 'response' });
  }
}
