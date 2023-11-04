import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhloanComponent } from './hhloan.component';

describe('HhloanComponent', () => {
  let component: HhloanComponent;
  let fixture: ComponentFixture<HhloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
