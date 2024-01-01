import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMbmcashflowdetailsComponent } from './bmbmcashflowdetails.component';

describe('BMbmcashflowdetailsComponent', () => {
  let component: BMbmcashflowdetailsComponent;
  let fixture: ComponentFixture<BMbmcashflowdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMbmcashflowdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMbmcashflowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
