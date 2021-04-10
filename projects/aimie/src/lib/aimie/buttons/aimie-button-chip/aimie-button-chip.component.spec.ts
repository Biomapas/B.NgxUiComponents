import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimieButtonChipComponent } from './aimie-button-chip.component';

describe('AimieButtonRefreshComponent', () => {
  let component: AimieButtonChipComponent;
  let fixture: ComponentFixture<AimieButtonChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimieButtonChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimieButtonChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
