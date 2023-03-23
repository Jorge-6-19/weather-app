import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AirQuality } from 'src/app/uploader/types/air-quality.enum';

// component show  AirQuality with their states
@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent {
  AirQuality = AirQuality;
  @Input() airQuality: AirQuality;
}
