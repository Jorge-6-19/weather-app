import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataByDateTableComponent } from './weather-data-by-date-table.component';

describe('WeatherDataByDateTableComponent', () => {
  let component: WeatherDataByDateTableComponent;
  let fixture: ComponentFixture<WeatherDataByDateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataByDateTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDataByDateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
