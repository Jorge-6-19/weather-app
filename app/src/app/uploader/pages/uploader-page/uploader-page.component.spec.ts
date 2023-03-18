import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderPageComponent } from './uploader-page.component';

describe('UploaderPageComponent', () => {
  let component: UploaderPageComponent;
  let fixture: ComponentFixture<UploaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
