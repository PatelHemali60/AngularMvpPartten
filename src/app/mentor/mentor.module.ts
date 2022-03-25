import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorContainerComponent } from './mentor-container/mentor-container.component';
import { MentorFormPresentationComponent } from './mentor-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPresentationComponent } from './mentor-container/mentor-list-presentation/mentor-list-presentation.component';

import { OverlayModule } from '@angular/cdk/overlay';

import { MentorService } from './mentor.service';
import { SharedModule } from '../shared/shared.module';

import { FilterPresentationComponent } from './mentor-container/mentor-list-presentation/filter-presentation/filter-presentation.component';
import { FiltePresnterService } from './mentor-container/mentor-list-presentation/filter-presenter/filte-presnter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MentorComponent,
    MentorContainerComponent,
    MentorFormPresentationComponent,
    MentorListPresentationComponent,
    
    FilterPresentationComponent,
    
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
ReactiveFormsModule,
FormsModule,
    OverlayModule,
    ],
  providers: [
    MentorService,
  ]
})
export class MentorModule { }
