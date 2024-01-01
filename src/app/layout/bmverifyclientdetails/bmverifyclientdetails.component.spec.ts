import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmverifyclientdetailsComponent } from './bmverifyclientdetails.component';

describe('BmverifyclientdetailsComponent', () => {
  let component: BmverifyclientdetailsComponent;
  let fixture: ComponentFixture<BmverifyclientdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmverifyclientdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmverifyclientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
