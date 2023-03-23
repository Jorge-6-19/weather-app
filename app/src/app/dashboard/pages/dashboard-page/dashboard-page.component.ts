import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  City,
  Country,
  WeatherByDate,
  WeatherData,
  WeatherDataRow
} from 'src/app/uploader/interface/weather-data.interface';
import { WeatherService } from 'src/app/uploader/services/weather.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  //Data que viene de back.
  weatherData: WeatherDataRow[];
  countries: Country[] = [];
  cities: City[] = [];

  // All dates
  weatherByDates: WeatherByDate[] = [];

  //Selected date.
  selectedWeatherByDate: WeatherByDate;
  currentDate: string;
  currentTime: string;
  currentWeather: WeatherData;
  private fb: FormBuilder = new FormBuilder();


  form: FormGroup = this.fb.group({
    countryId: '',
    cityName: '',
  });

  private dashboardSubscriptions = new Subscription();

  constructor(
    private weatherService: WeatherService,
    private datePipe: DatePipe
  ) {}

  // load  the data calling the api in the dashboardSubscriptions and call the functions to group the countruies and cities subscribe
  ngOnInit(): void {
    this.dashboardSubscriptions.add(
      this.weatherService
        .getWeatherData$()
        .subscribe((weatherData) => this.receiveData(weatherData))
    );

    this.weatherService.getWeatherData();

    this.dashboardSubscriptions.add(
      this.form.controls['countryId'].valueChanges.subscribe((value) =>
        this.getCountryId(value)
      )
    );
    this.dashboardSubscriptions.add(
      this.form.controls['cityName'].valueChanges.subscribe((value) =>
        this.getCityName(value)
      )
    );
    
    const currentDate = new Date();
    this.currentDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    this.currentTime = this.datePipe.transform(currentDate, 'HH');
  }
  // close the subscription
  ngOnDestroy(): void {
    this.dashboardSubscriptions.unsubscribe();
  }
  // function group groups countries 
  receiveData(weatherData: WeatherDataRow[]) {
    this.countries = [];
    if (weatherData?.length) {
      const groups = this.weatherService.groupBy(
        weatherData,
        (row: WeatherDataRow) => row.country
      );

      for (const group of groups) {
        const country: Country = {
          id: group[1][0].id,
          name: group[0],
          cities: this.weatherService.buildCities(group[1]),
        };
        if (country?.name && country?.cities) {
          this.countries.push(country);
        }
      }
    }
  }
// function group groups cities 
  getCountryId(countryId: string) {
    const country = this.countries?.find((c) => c.id === countryId);
    this.cities = [];
    this.weatherByDates = [];
    this.selectedWeatherByDate = null;
    this.currentWeather = null;
    if (country?.cities?.length) {
      this.cities = country.cities;
    }
  }

// function that groups weather by date
  getCityName(cityName: string) {
    const city = this.cities?.find((c) => c.name === cityName);
    this.weatherByDates = [];
    this.selectedWeatherByDate = null;
    this.currentWeather = null;
    if (city?.weatherByDate?.length) {
      this.weatherByDates = city.weatherByDate;
      const dataByDate = this.weatherByDates.find((w) =>
        w.date.includes(this.currentDate)
      );
      this.selectedWeatherByDate = dataByDate;
      if (this.selectedWeatherByDate?.weatherData?.length) {
        console.log('weatherData', this.selectedWeatherByDate.weatherData);
        this.currentWeather = this.selectedWeatherByDate?.weatherData.find(
          (w) => w.hour.split(':')[0].includes(this.currentTime)
        );
      }
    }
  }
// function show  weather By Date 
  onWeatherByDateClick(weatherByDate: WeatherByDate) {
    this.selectedWeatherByDate = weatherByDate;
  }
}
