import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AirQuality } from 'src/app/uploader/types/air-quality.enum';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirQualityComponent {
  AirQuality = AirQuality;
  @Input() airQuality: AirQuality;
}
