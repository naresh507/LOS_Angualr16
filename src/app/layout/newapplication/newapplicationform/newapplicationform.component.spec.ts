import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapplicationformComponent } from './newapplicationform.component';

describe('NewapplicationformComponent', () => {
  let component: NewapplicationformComponent;
  let fixture: ComponentFixture<NewapplicationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewapplicationformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
