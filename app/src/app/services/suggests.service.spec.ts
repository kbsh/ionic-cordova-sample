import { TestBed } from '@angular/core/testing';

import { SuggestsService } from './suggests.service';

describe('SuggestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuggestsService = TestBed.get(SuggestsService);
    expect(service).toBeTruthy();
  });
});
