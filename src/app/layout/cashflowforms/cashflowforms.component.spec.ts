import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowformsComponent } from './cashflowforms.component';

describe('CashflowformsComponent', () => {
  let component: CashflowformsComponent;
  let fixture: ComponentFixture<CashflowformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashflowformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashflowformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
