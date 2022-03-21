import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorContainerComponent } from './mentor-container/mentor-container.component';
import { MentorFormPresentationComponent } from './mentor-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPresentationComponent } from './mentor-container/mentor-list-presentation/mentor-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { MentorService } from './mentor.service';


@NgModule({
  declarations: [
    MentorComponent,
    MentorContainerComponent,
    MentorFormPresentationComponent,
    MentorListPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  providers: [
    MentorService
  ]
})
export class MentorModule { }
