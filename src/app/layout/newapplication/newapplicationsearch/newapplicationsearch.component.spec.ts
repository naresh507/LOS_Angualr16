import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapplicationsearchComponent } from './newapplicationsearch.component';

describe('NewapplicationsearchComponent', () => {
  let component: NewapplicationsearchComponent;
  let fixture: ComponentFixture<NewapplicationsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewapplicationsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewapplicationsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
