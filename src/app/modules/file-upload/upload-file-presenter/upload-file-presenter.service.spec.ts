import { TestBed } from '@angular/core/testing';

import { UploadFilePresenterService } from './upload-file-presenter.service';

describe('UploadFilePresenterService', () => {
  let service: UploadFilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
