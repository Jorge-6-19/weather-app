import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModule {}
