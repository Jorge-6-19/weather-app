import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DayWeatherResumeComponent } from './components/day-weather-resume/day-weather-resume.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  declarations: [DashboardPageComponent, DayWeatherResumeComponent],
  imports: [CommonModule,ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModule {}
