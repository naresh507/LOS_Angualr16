import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct1DetailsComponent } from './ct1-details.component';

describe('Ct1DetailsComponent', () => {
  let component: Ct1DetailsComponent;
  let fixture: ComponentFixture<Ct1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ct1DetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ct1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
