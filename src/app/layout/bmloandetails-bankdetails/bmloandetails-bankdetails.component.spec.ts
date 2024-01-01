import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMloandetailsBankdetailsComponent } from './bmloandetails-bankdetails.component';

describe('BMloandetailsBankdetailsComponent', () => {
  let component: BMloandetailsBankdetailsComponent;
  let fixture: ComponentFixture<BMloandetailsBankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMloandetailsBankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMloandetailsBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
