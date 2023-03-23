import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/uploader/interface/weather-data.interface';
import { ImagesUrls } from '../../config/images-urls/images-urls';

// component show weather current
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CurrentWeatherComponent {
  ImagesUrls = ImagesUrls;
  @Input() date?: string;
  @Input() time?: string;
  @Input() weather: WeatherData;
}
