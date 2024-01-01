import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmcgt1detailsComponent } from './bmcgt1details.component';

describe('Bmcgt1detailsComponent', () => {
  let component: Bmcgt1detailsComponent;
  let fixture: ComponentFixture<Bmcgt1detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bmcgt1detailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bmcgt1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
