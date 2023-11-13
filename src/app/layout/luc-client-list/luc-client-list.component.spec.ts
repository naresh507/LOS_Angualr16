import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucClientListComponent } from './luc-client-list.component';

describe('LucClientListComponent', () => {
  let component: LucClientListComponent;
  let fixture: ComponentFixture<LucClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucClientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
