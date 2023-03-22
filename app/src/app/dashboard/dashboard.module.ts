import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DayWeatherResumeComponent } from './components/day-weather-resume/day-weather-resume.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherDataByDateTableComponent } from './components/weather-data-by-date-table/weather-data-by-date-table.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

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
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DatePipe],
})
export class DashboardModule {}
