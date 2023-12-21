import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmloandetailsComponent } from './bmloandetails.component';

describe('BmloandetailsComponent', () => {
  let component: BmloandetailsComponent;
  let fixture: ComponentFixture<BmloandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmloandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
