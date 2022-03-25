import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { ChildOneComponent } from './child-one/child-one.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildOneComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
