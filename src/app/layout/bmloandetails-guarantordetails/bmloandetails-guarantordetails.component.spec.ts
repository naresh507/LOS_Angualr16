import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMloandetailsGuarantordetailsComponent } from './bmloandetails-guarantordetails.component';

describe('BMloandetailsGuarantordetailsComponent', () => {
  let component: BMloandetailsGuarantordetailsComponent;
  let fixture: ComponentFixture<BMloandetailsGuarantordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMloandetailsGuarantordetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMloandetailsGuarantordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
