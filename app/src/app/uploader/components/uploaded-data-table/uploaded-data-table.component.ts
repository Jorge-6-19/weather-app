import { Component, Input } from '@angular/core';
import {
  WeatherDataRow
} from '../../interface/weather-data.interface';
// component to present the data to be uploaded to the database
@Component({
  selector: 'app-uploaded-data-table',
  templateUrl: './uploaded-data-table.component.html',
  styleUrls: ['./uploaded-data-table.component.scss'],
})
export class UploadedDataTableComponent {
  @Input() data: WeatherDataRow[] = [];
}
