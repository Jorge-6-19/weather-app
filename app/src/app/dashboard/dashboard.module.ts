import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DayWeatherResumeComponent } from './components/day-weather-resume/day-weather-resume.component';
import { WeatherDataByDateTableComponent } from './components/weather-data-by-date-table/weather-data-by-date-table.component';
import { WeatherStatusComponent } from './components/weather-status/weather-status.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  declarations: [
    DashboardPageComponent,
    DayWeatherResumeComponent,
    WeatherDataByDateTableComponent,
    CurrentWeatherComponent,
    AirQualityComponent,
    WeatherStatusComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DatePipe],
})
export class DashboardModule {}
