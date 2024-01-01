import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCRAdharComponent } from './ocradhar.component';

describe('OCRAdharComponent', () => {
  let component: OCRAdharComponent;
  let fixture: ComponentFixture<OCRAdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OCRAdharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OCRAdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
