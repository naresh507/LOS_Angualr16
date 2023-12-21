import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcashflowdetailsComponent } from './bmcashflowdetails.component';

describe('BmcashflowdetailsComponent', () => {
  let component: BmcashflowdetailsComponent;
  let fixture: ComponentFixture<BmcashflowdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcashflowdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmcashflowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
