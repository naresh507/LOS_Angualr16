import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMloandetailsHhloanComponent } from './bmloandetails-hhloan.component';

describe('BMloandetailsHhloanComponent', () => {
  let component: BMloandetailsHhloanComponent;
  let fixture: ComponentFixture<BMloandetailsHhloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMloandetailsHhloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMloandetailsHhloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
