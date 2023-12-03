import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { exitAddCvGuard } from './exit-add-cv.guard';

describe('exitAddCvGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exitAddCvGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
