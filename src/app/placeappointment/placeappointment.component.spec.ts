import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceappointmentComponent } from './placeappointment.component';

describe('PlaceappointmentComponent', () => {
  let component: PlaceappointmentComponent;
  let fixture: ComponentFixture<PlaceappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
