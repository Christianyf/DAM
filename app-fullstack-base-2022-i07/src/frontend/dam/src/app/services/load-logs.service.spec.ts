import { TestBed } from '@angular/core/testing';

import { LoadLogsService } from './load-logs.service';

describe('LoadLogsService', () => {
  let service: LoadLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
