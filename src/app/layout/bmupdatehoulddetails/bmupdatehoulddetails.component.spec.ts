import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMupdatehoulddetailsComponent } from './bmupdatehoulddetails.component';

describe('BMupdatehoulddetailsComponent', () => {
  let component: BMupdatehoulddetailsComponent;
  let fixture: ComponentFixture<BMupdatehoulddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMupdatehoulddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMupdatehoulddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
