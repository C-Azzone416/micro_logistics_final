import { TestBed } from '@angular/core/testing';

import { AcnhLoversApiService } from './acnh-lovers-api.service';

describe('MicroLogisticsApiService', () => {
  let service: AcnhLoversApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcnhLoversApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
