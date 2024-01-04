import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoLoandetailsGaurantorDetailsComponent } from './ao-loandetails-gaurantor-details.component';

describe('AoLoandetailsGaurantorDetailsComponent', () => {
  let component: AoLoandetailsGaurantorDetailsComponent;
  let fixture: ComponentFixture<AoLoandetailsGaurantorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoLoandetailsGaurantorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoLoandetailsGaurantorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
