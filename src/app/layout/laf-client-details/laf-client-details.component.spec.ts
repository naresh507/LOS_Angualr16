import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafClientDetailsComponent } from './laf-client-details.component';

describe('LafClientDetailsComponent', () => {
  let component: LafClientDetailsComponent;
  let fixture: ComponentFixture<LafClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafClientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
