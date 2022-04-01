import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from './file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  

  selectedFiles!: FileList  ;
  progressInfos:any = [];
  message = '';
  fileInfos!: Observable<any>;

  constructor(private uploadService:UploadFilesService) { }

  ngOnInit() {
    // console.log(this.fileInfos);
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFiles(event:any) {
    
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
  console.log('ok')
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }


  upload(idx: number, file: any) {

    console.log('ok')
  
    this.progressInfos[idx] = [{ value: 0, fileName: file.name }];
    this.uploadService.upload(file).subscribe(
      (event:any) => {
        if (event.type  === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }
}
