import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowDetailsComponent } from './cashflow-details.component';

describe('CashflowDetailsComponent', () => {
  let component: CashflowDetailsComponent;
  let fixture: ComponentFixture<CashflowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashflowDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashflowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
