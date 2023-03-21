import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UploadedDataTableComponent } from './components/uploaded-data-table/uploaded-data-table.component';

const routes: Routes = [
  {
    path: '',
    component: UploaderPageComponent,
  },
];

@NgModule({
  declarations: [UploaderPageComponent, UploadedDataTableComponent],
  imports: [CommonModule,SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaderModule {}
