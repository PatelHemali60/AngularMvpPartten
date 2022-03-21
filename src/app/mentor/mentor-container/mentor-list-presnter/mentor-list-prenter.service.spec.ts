import { TestBed } from '@angular/core/testing';

import { MentorListPrenterService } from './mentor-list-prenter.service';

describe('MentorListPrenterService', () => {
  let service: MentorListPrenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorListPrenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
