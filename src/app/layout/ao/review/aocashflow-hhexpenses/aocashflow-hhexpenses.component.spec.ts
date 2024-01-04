import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AocashflowHhexpensesComponent } from './aocashflow-hhexpenses.component';

describe('AocashflowHhexpensesComponent', () => {
  let component: AocashflowHhexpensesComponent;
  let fixture: ComponentFixture<AocashflowHhexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AocashflowHhexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AocashflowHhexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
