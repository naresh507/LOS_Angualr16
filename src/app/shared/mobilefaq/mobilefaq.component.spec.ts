import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilefaqComponent } from './mobilefaq.component';

describe('MobilefaqComponent', () => {
  let component: MobilefaqComponent;
  let fixture: ComponentFixture<MobilefaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilefaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilefaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
