import { TestBed } from '@angular/core/testing';

import { GlobalresepService } from './globalresep.service';

describe('GlobalresepService', () => {
  let service: GlobalresepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalresepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
