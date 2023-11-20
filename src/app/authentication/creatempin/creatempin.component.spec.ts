import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatempinComponent } from './creatempin.component';

describe('CreatempinComponent', () => {
  let component: CreatempinComponent;
  let fixture: ComponentFixture<CreatempinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatempinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatempinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
