import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimieButtonFetchingComponent } from './aimie-button-fetching.component';

describe('AimieButtonRefreshComponent', () => {
  let component: AimieButtonFetchingComponent;
  let fixture: ComponentFixture<AimieButtonFetchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimieButtonFetchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimieButtonFetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
