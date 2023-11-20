import { TestBed } from '@angular/core/testing';

import { EmbaucherService } from './embaucher.service';

describe('EmbaucherService', () => {
  let service: EmbaucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbaucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
