import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateClientdetailsHouseholdDetailsComponent } from './view-update-clientdetails-household-details.component';

describe('ViewUpdateClientdetailsHouseholdDetailsComponent', () => {
  let component: ViewUpdateClientdetailsHouseholdDetailsComponent;
  let fixture: ComponentFixture<ViewUpdateClientdetailsHouseholdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateClientdetailsHouseholdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpdateClientdetailsHouseholdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
