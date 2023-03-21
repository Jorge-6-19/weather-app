import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedDataTableComponent } from './uploaded-data-table.component';

describe('UploadedDataTableComponent', () => {
  let component: UploadedDataTableComponent;
  let fixture: ComponentFixture<UploadedDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
