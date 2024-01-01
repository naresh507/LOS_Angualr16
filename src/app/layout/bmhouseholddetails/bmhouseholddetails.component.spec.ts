import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMhouseholddetailsComponent } from './bmhouseholddetails.component';

describe('BMhouseholddetailsComponent', () => {
  let component: BMhouseholddetailsComponent;
  let fixture: ComponentFixture<BMhouseholddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMhouseholddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMhouseholddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
