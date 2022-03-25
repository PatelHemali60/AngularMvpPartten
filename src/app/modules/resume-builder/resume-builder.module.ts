import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { UserFormComponent } from './user-form/user-form.component';

import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeService } from './service/resume.service';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,


    SharedModule
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeBuilderModule { }
