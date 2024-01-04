import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AocashflowHhloaneligibilityComponent } from './aocashflow-hhloaneligibility.component';

describe('AocashflowHhloaneligibilityComponent', () => {
  let component: AocashflowHhloaneligibilityComponent;
  let fixture: ComponentFixture<AocashflowHhloaneligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AocashflowHhloaneligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AocashflowHhloaneligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
