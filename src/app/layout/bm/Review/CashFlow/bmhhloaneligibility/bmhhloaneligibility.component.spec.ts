import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmhhloaneligibilityComponent } from './bmhhloaneligibility.component';

describe('BmhhloaneligibilityComponent', () => {
  let component: BmhhloaneligibilityComponent;
  let fixture: ComponentFixture<BmhhloaneligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmhhloaneligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmhhloaneligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
