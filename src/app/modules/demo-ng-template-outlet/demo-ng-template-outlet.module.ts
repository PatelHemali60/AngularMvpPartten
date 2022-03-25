import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoNgTemplateOutletRoutingModule } from './demo-ng-template-outlet-routing.module';
import { DemoNgTemplateOutletComponent } from './demo-ng-template-outlet.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DemoNgTemplateOutletComponent,

  ],
  imports: [
    CommonModule,
    DemoNgTemplateOutletRoutingModule,
    SharedModule
  ]
})
export class DemoNgTemplateOutletModule { }
