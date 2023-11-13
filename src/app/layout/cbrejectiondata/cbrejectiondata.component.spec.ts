import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbrejectiondataComponent } from './cbrejectiondata.component';

describe('CbrejectiondataComponent', () => {
  let component: CbrejectiondataComponent;
  let fixture: ComponentFixture<CbrejectiondataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbrejectiondataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbrejectiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
