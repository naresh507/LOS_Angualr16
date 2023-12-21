import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcashflowformsComponent } from './bmcashflowforms.component';

describe('BmcashflowformsComponent', () => {
  let component: BmcashflowformsComponent;
  let fixture: ComponentFixture<BmcashflowformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcashflowformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmcashflowformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
