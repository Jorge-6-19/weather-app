import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeatherResumeComponent } from './day-weather-resume.component';

describe('DayWeatherResumeComponent', () => {
  let component: DayWeatherResumeComponent;
  let fixture: ComponentFixture<DayWeatherResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWeatherResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayWeatherResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
