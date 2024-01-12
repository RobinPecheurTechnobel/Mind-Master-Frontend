import { TestBed } from '@angular/core/testing';

import { ThinkerService } from './thinker.service';

describe('ThinkerService', () => {
  let service: ThinkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThinkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
