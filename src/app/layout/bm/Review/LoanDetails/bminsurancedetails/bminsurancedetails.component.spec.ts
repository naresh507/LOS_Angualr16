import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BminsurancedetailsComponent } from './bminsurancedetails.component';

describe('BminsurancedetailsComponent', () => {
  let component: BminsurancedetailsComponent;
  let fixture: ComponentFixture<BminsurancedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BminsurancedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BminsurancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
