import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharotpComponent } from './adharotp.component';

describe('AdharotpComponent', () => {
  let component: AdharotpComponent;
  let fixture: ComponentFixture<AdharotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdharotpComponent]
    });
    fixture = TestBed.createComponent(AdharotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
