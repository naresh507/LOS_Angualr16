import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancedetailsComponent } from './insurancedetails.component';

describe('InsurancedetailsComponent', () => {
  let component: InsurancedetailsComponent;
  let fixture: ComponentFixture<InsurancedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
