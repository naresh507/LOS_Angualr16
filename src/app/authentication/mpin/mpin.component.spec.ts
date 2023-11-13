import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpinComponent } from './mpin.component';

describe('MpinComponent', () => {
  let component: MpinComponent;
  let fixture: ComponentFixture<MpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
