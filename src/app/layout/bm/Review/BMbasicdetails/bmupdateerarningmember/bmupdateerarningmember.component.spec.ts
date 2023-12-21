import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmupdateerarningmemberComponent } from './bmupdateerarningmember.component';

describe('BmupdateerarningmemberComponent', () => {
  let component: BmupdateerarningmemberComponent;
  let fixture: ComponentFixture<BmupdateerarningmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmupdateerarningmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmupdateerarningmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
