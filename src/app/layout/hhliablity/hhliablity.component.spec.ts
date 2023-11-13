import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhliablityComponent } from './hhliablity.component';

describe('HhliablityComponent', () => {
  let component: HhliablityComponent;
  let fixture: ComponentFixture<HhliablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhliablityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhliablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
