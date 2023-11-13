import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholddetailsComponent } from './householddetails.component';

describe('HouseholddetailsComponent', () => {
  let component: HouseholddetailsComponent;
  let fixture: ComponentFixture<HouseholddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
