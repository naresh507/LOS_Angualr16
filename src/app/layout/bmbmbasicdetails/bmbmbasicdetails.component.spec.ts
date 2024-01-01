import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMBmbasicdetailsComponent } from './bmbmbasicdetails.component';

describe('BMBmbasicdetailsComponent', () => {
  let component: BMBmbasicdetailsComponent;
  let fixture: ComponentFixture<BMBmbasicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMBmbasicdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMBmbasicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
