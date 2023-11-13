import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucClientDetailsComponent } from './luc-client-details.component';

describe('LucClientDetailsComponent', () => {
  let component: LucClientDetailsComponent;
  let fixture: ComponentFixture<LucClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucClientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
