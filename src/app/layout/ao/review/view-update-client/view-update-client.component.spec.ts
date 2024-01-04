import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateClientComponent } from './view-update-client.component';

describe('ViewUpdateClientComponent', () => {
  let component: ViewUpdateClientComponent;
  let fixture: ComponentFixture<ViewUpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
