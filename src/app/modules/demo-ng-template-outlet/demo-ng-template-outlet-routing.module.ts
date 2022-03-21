import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoNgTemplateOutletComponent } from './demo-ng-template-outlet.component';

const routes: Routes = [{ path: '', component: DemoNgTemplateOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoNgTemplateOutletRoutingModule { }
