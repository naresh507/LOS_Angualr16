import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpinForgotComponent } from './mpin-forgot.component';

describe('MpinForgotComponent', () => {
  let component: MpinForgotComponent;
  let fixture: ComponentFixture<MpinForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpinForgotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpinForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
