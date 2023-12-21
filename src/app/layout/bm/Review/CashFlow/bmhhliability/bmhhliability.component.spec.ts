import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmhhliabilityComponent } from './bmhhliability.component';

describe('BmhhliabilityComponent', () => {
  let component: BmhhliabilityComponent;
  let fixture: ComponentFixture<BmhhliabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmhhliabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmhhliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
