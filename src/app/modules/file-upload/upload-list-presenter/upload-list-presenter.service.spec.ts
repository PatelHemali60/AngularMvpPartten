import { TestBed } from '@angular/core/testing';

import { UploadListPresenterService } from './upload-list-presenter.service';

describe('UploadListPresenterService', () => {
  let service: UploadListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
