import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMbmcashflowHhexpensesComponent } from './bmbmcashflow-hhexpenses.component';

describe('BMbmcashflowHhexpensesComponent', () => {
  let component: BMbmcashflowHhexpensesComponent;
  let fixture: ComponentFixture<BMbmcashflowHhexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMbmcashflowHhexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMbmcashflowHhexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
