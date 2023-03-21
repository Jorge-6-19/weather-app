import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  City,
  Country,
  WeatherByDate
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
  weatherByDate: WeatherByDate[] = [];
  selectedCity: City;
  private fb: FormBuilder = new FormBuilder();

  form: FormGroup = this.fb.group({
    countryId: '',
    cityName: '',
  });

  private dashboardSubscriptions = new Subscription();
  constructor(private weatherService: WeatherService) {}

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
  }

  ngOnDestroy(): void {
    this.dashboardSubscriptions.unsubscribe();
  }

  getCountryId(countryId: string) {
    const country = this.countries?.find((c) => c.id === countryId);
    this.cities = [];
    if (country?.cities?.length) {
      this.cities = country.cities;
    }
  }
  getCityName(cityName: string) {
    const city = this.cities?.find((c) => c.name === cityName);
    this.weatherByDate = [];
    if (city?.weatherByDate?.length) {
      this.weatherByDate = city.weatherByDate;
    }
    console.log('weatherByDate', this.weatherByDate);
  }

  getCountries(countries: Country[]) {
    this.countries = countries;
  }
}
