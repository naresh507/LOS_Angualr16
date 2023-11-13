import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharclientpictureComponent } from './aadharclientpicture.component';

describe('AadharclientpictureComponent', () => {
  let component: AadharclientpictureComponent;
  let fixture: ComponentFixture<AadharclientpictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadharclientpictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadharclientpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
