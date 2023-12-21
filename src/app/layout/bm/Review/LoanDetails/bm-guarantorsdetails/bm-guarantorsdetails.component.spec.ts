import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmGuarantorsdetailsComponent } from './bm-guarantorsdetails.component';

describe('BmGuarantorsdetailsComponent', () => {
  let component: BmGuarantorsdetailsComponent;
  let fixture: ComponentFixture<BmGuarantorsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmGuarantorsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmGuarantorsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
