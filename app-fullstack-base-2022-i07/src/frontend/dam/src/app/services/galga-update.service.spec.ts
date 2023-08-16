import { TestBed } from '@angular/core/testing';

import { GalgaUpdateService } from './galga-update.service';

describe('GalgaUpdateService', () => {
  let service: GalgaUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalgaUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
