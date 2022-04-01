import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadListPresentationComponent } from './upload-list-presentation.component';

describe('UploadListPresentationComponent', () => {
  let component: UploadListPresentationComponent;
  let fixture: ComponentFixture<UploadListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
