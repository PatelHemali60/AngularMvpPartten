import { TestBed } from '@angular/core/testing';

import { FiltePresnterService } from './filte-presnter.service';

describe('FiltePresnterService', () => {
  let service: FiltePresnterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltePresnterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
