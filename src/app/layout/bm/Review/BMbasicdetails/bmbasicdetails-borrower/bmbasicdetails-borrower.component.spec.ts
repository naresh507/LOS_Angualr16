import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbasicdetailsBorrowerComponent } from './bmbasicdetails-borrower.component';

describe('BmbasicdetailsBorrowerComponent', () => {
  let component: BmbasicdetailsBorrowerComponent;
  let fixture: ComponentFixture<BmbasicdetailsBorrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmbasicdetailsBorrowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbasicdetailsBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
