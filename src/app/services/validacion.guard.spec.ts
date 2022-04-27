import { TestBed } from '@angular/core/testing';

import { ValidacionGuard } from './validacion.guard';

describe('ValidacionGuard', () => {
  let guard: ValidacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
