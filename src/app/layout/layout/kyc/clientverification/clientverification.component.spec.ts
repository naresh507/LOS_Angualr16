import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientverificationComponent } from './clientverification.component';

describe('ClientverificationComponent', () => {
  let component: ClientverificationComponent;
  let fixture: ComponentFixture<ClientverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
