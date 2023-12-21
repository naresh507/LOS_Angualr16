import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmearningmemberdetailsComponent } from './bmearningmemberdetails.component';

describe('BmearningmemberdetailsComponent', () => {
  let component: BmearningmemberdetailsComponent;
  let fixture: ComponentFixture<BmearningmemberdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmearningmemberdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmearningmemberdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
