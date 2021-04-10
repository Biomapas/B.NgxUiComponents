import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimieButtonRefreshComponent } from './aimie-button-refresh.component';

describe('AimieButtonRefreshComponent', () => {
  let component: AimieButtonRefreshComponent;
  let fixture: ComponentFixture<AimieButtonRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimieButtonRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimieButtonRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
