import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherStatus } from 'src/app/uploader/types/wather-status.enum';
import { ImagesUrls } from '../../config/images-urls/images-urls';

// component show  weatherStatus with their states
@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.scss']
})
export class WeatherStatusComponent {
  WeatherStatus = WeatherStatus;
  ImagesUrls = ImagesUrls;
  @Input() weatherStatus: WeatherStatus;

}
