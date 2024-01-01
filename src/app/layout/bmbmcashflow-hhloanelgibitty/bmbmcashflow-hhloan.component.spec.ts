import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMbmcashflowHhloanComponent } from './bmbmcashflow-hhloan.component';

describe('BMbmcashflowHhloanComponent', () => {
  let component: BMbmcashflowHhloanComponent;
  let fixture: ComponentFixture<BMbmcashflowHhloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMbmcashflowHhloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMbmcashflowHhloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
