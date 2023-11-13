import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucCheckComponent } from './luc-check.component';

describe('LucCheckComponent', () => {
  let component: LucCheckComponent;
  let fixture: ComponentFixture<LucCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
