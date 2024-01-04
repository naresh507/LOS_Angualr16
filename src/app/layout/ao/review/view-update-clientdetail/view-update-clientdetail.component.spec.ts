import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateClientdetailComponent } from './view-update-clientdetail.component';

describe('ViewUpdateClientdetailComponent', () => {
  let component: ViewUpdateClientdetailComponent;
  let fixture: ComponentFixture<ViewUpdateClientdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateClientdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpdateClientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
