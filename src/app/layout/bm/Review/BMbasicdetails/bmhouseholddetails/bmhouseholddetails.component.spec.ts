import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmhouseholddetailsComponent } from './bmhouseholddetails.component';

describe('BmhouseholddetailsComponent', () => {
  let component: BmhouseholddetailsComponent;
  let fixture: ComponentFixture<BmhouseholddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmhouseholddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmhouseholddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
