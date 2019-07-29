import { TestBed } from '@angular/core/testing';

import { UserSpendingService } from './user-spending.service';

describe('UserSpendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSpendingService = TestBed.get(UserSpendingService);
    expect(service).toBeTruthy();
  });
});
