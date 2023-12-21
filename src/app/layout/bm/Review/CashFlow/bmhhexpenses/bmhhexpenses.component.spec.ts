import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmhhexpensesComponent } from './bmhhexpenses.component';

describe('BmhhexpensesComponent', () => {
  let component: BmhhexpensesComponent;
  let fixture: ComponentFixture<BmhhexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmhhexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmhhexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
