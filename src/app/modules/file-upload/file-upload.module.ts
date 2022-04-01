import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UploadFilePresentationComponent } from './upload-file-presentation/upload-file-presentation.component';
import { UploadListPresentationComponent } from './upload-list-presentation/upload-list-presentation.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



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
