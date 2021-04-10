import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimieComponent } from './aimie.component';

describe('AimieComponent', () => {
  let component: AimieComponent;
  let fixture: ComponentFixture<AimieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
