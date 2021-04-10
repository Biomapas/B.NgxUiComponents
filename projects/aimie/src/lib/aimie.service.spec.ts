import { TestBed } from '@angular/core/testing';

import { AimieService } from './aimie.service';

describe('AimieService', () => {
  let service: AimieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AimieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
