import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateClientdetailsEarningmemberdetailsComponent } from './view-update-clientdetails-earningmemberdetails.component';

describe('ViewUpdateClientdetailsEarningmemberdetailsComponent', () => {
  let component: ViewUpdateClientdetailsEarningmemberdetailsComponent;
  let fixture: ComponentFixture<ViewUpdateClientdetailsEarningmemberdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateClientdetailsEarningmemberdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpdateClientdetailsEarningmemberdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
