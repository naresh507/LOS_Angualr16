import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMearningmemberdetailsComponent } from './bmearningmemberdetails.component';

describe('BMearningmemberdetailsComponent', () => {
  let component: BMearningmemberdetailsComponent;
  let fixture: ComponentFixture<BMearningmemberdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMearningmemberdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMearningmemberdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
