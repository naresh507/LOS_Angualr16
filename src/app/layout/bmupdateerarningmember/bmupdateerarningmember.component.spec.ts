import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMupdateerarningmemberComponent } from './bmupdateerarningmember.component';

describe('BMupdateerarningmemberComponent', () => {
  let component: BMupdateerarningmemberComponent;
  let fixture: ComponentFixture<BMupdateerarningmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMupdateerarningmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMupdateerarningmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
