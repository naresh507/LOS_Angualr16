import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelistComponent } from './feelist.component';

describe('FeelistComponent', () => {
  let component: FeelistComponent;
  let fixture: ComponentFixture<FeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
