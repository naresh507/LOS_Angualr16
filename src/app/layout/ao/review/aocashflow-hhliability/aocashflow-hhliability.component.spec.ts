import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AocashflowHhliabilityComponent } from './aocashflow-hhliability.component';

describe('AocashflowHhliabilityComponent', () => {
  let component: AocashflowHhliabilityComponent;
  let fixture: ComponentFixture<AocashflowHhliabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AocashflowHhliabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AocashflowHhliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
