import { TestBed } from '@angular/core/testing';

import { HofService } from './hof.service';

describe('HofService', () => {
  let service: HofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
