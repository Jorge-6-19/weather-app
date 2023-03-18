import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UploaderPageComponent,
  },
];

@NgModule({
  declarations: [UploaderPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaderModule {}
