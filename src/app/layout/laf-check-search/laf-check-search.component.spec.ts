import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafCheckSearchComponent } from './laf-check-search.component';

describe('LafCheckSearchComponent', () => {
  let component: LafCheckSearchComponent;
  let fixture: ComponentFixture<LafCheckSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafCheckSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafCheckSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
