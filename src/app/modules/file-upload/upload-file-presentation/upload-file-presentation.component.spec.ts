import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilePresentationComponent } from './upload-file-presentation.component';

describe('UploadFilePresentationComponent', () => {
  let component: UploadFilePresentationComponent;
  let fixture: ComponentFixture<UploadFilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
