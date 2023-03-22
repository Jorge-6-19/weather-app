import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  City,
  Country,
  WeatherByDate,
  WeatherData,
} from 'src/app/uploader/interface/weather-data.interface';
import { WeatherService } from 'src/app/uploader/services/weather.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  cities: City[] = [];

  // All dates
  weatherByDates: WeatherByDate[] = [];

  //Selected date.
  selectedWeatherByDate: WeatherByDate;
  currentDate: string;
  currentTime: string;
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

  ngOnInit(): void {
    this.dashboardSubscriptions.add(
      this.weatherService.getCountries().subscribe((res) => {
        this.getCountries(res);
      })
    );
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
    console.log(this.currentTime);
    
  }

  ngOnDestroy(): void {
    this.dashboardSubscriptions.unsubscribe();
  }

  getCountryId(countryId: string) {
    const country = this.countries?.find((c) => c.id === countryId);
    this.cities = [];
    this.weatherByDates = [];
    this.selectedWeatherByDate = null;
    if (country?.cities?.length) {
      this.cities = country.cities;
    }
  }
  getCityName(cityName: string) {
    const city = this.cities?.find((c) => c.name === cityName);
    this.weatherByDates = [];
    this.selectedWeatherByDate = null;
    if (city?.weatherByDate?.length) {
      this.weatherByDates = city.weatherByDate;
      const dataByDate = this.weatherByDates.find(
        (w) => w.date === this.currentDate
      );
      this.selectedWeatherByDate = dataByDate;
    }
  }

  getCountries(countries: Country[]) {
    this.countries = countries;
  }

  onWeatherByDateClick(weatherByDate: WeatherByDate) {
    this.selectedWeatherByDate = weatherByDate;
  }
}
