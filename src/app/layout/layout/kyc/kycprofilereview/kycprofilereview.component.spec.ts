import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycprofilereviewComponent } from './kycprofilereview.component';

describe('KycprofilereviewComponent', () => {
  let component: KycprofilereviewComponent;
  let fixture: ComponentFixture<KycprofilereviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycprofilereviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KycprofilereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
