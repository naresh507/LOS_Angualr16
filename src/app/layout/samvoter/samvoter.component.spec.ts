import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamvoterComponent } from './samvoter.component';

describe('SamvoterComponent', () => {
  let component: SamvoterComponent;
  let fixture: ComponentFixture<SamvoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamvoterComponent]
    });
    fixture = TestBed.createComponent(SamvoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
