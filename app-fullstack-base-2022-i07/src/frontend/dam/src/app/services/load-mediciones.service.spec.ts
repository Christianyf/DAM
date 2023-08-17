import { TestBed } from '@angular/core/testing';

import { LoadMedicionesService } from './load-mediciones.service';

describe('LoadMedicionesService', () => {
  let service: LoadMedicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMedicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
