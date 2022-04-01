import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { UploadFilePresentationComponent } from './upload-file-presentation/upload-file-presentation.component';
import { UploadListPresentationComponent } from './upload-list-presentation/upload-list-presentation.component';





@NgModule({
  declarations: [
    FileUploadComponent,
    UploadFilePresentationComponent,
    UploadListPresentationComponent,

  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule,
    RouterModule,
  
  
  ]
})
export class FileUploadModule { }
