import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMbmcashflowHhliablityComponent } from './bmbmcashflow-hhliablity.component';

describe('BMbmcashflowHhliablityComponent', () => {
  let component: BMbmcashflowHhliablityComponent;
  let fixture: ComponentFixture<BMbmcashflowHhliablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMbmcashflowHhliablityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMbmcashflowHhliablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
