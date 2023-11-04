import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucCheckSearchComponent } from './luc-check-search.component';

describe('LucCheckSearchComponent', () => {
  let component: LucCheckSearchComponent;
  let fixture: ComponentFixture<LucCheckSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucCheckSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucCheckSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
