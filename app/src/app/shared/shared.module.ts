import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, FileUploaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FileUploaderComponent],
})
export class SharedModule {}
