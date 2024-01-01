import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMloandetailsInsurancedetailsComponent } from './bmloandetails-insurancedetails.component';

describe('BMloandetailsInsurancedetailsComponent', () => {
  let component: BMloandetailsInsurancedetailsComponent;
  let fixture: ComponentFixture<BMloandetailsInsurancedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMloandetailsInsurancedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMloandetailsInsurancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
