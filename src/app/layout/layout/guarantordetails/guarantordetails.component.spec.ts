import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantordetailsComponent } from './guarantordetails.component';

describe('GuarantordetailsComponent', () => {
  let component: GuarantordetailsComponent;
  let fixture: ComponentFixture<GuarantordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarantordetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
