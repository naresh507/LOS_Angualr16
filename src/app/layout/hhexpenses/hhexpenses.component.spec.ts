import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhexpensesComponent } from './hhexpenses.component';

describe('HhexpensesComponent', () => {
  let component: HhexpensesComponent;
  let fixture: ComponentFixture<HhexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
