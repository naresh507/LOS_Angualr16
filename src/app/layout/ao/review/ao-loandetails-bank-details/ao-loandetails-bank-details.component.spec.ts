import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoLoandetailsBankDetailsComponent } from './ao-loandetails-bank-details.component';

describe('AoLoandetailsBankDetailsComponent', () => {
  let component: AoLoandetailsBankDetailsComponent;
  let fixture: ComponentFixture<AoLoandetailsBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoLoandetailsBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoLoandetailsBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
