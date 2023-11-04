import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewApplicationComponent } from './addnew-application.component';

describe('AddnewApplicationComponent', () => {
  let component: AddnewApplicationComponent;
  let fixture: ComponentFixture<AddnewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
