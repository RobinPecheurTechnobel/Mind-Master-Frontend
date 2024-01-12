import { TestBed } from '@angular/core/testing';

import { ThinkerSearchDialogService } from './thinker-search-dialog.service';

describe('ThinkerSearchDialogService', () => {
  let service: ThinkerSearchDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThinkerSearchDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
