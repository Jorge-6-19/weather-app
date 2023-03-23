import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @Input() requiredFileType!: string[];
  @Output() selectedFile = new EventEmitter<File>();

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    this.selectedFile.emit(file);
  }
}
