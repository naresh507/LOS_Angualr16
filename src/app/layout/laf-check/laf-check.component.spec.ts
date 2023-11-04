import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafCheckComponent } from './laf-check.component';

describe('LafCheckComponent', () => {
  let component: LafCheckComponent;
  let fixture: ComponentFixture<LafCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
