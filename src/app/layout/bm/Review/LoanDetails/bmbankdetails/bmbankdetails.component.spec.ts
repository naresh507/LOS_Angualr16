import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbankdetailsComponent } from './bmbankdetails.component';

describe('BmbankdetailsComponent', () => {
  let component: BmbankdetailsComponent;
  let fixture: ComponentFixture<BmbankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
