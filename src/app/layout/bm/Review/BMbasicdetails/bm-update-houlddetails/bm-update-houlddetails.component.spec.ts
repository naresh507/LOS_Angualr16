import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmUpdateHoulddetailsComponent } from './bm-update-houlddetails.component';

describe('BmUpdateHoulddetailsComponent', () => {
  let component: BmUpdateHoulddetailsComponent;
  let fixture: ComponentFixture<BmUpdateHoulddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmUpdateHoulddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmUpdateHoulddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
