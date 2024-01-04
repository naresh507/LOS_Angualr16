import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoLoandetailsInsuranceDetailsComponent } from './ao-loandetails-insurance-details.component';

describe('AoLoandetailsInsuranceDetailsComponent', () => {
  let component: AoLoandetailsInsuranceDetailsComponent;
  let fixture: ComponentFixture<AoLoandetailsInsuranceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoLoandetailsInsuranceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoLoandetailsInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
